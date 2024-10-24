package user

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"time"

	user_db "github.com/abuquack/e-vendora/pkgs/user/db"
	"github.com/jackc/pgx/v5/pgtype"
	gonanoid "github.com/matoous/go-nanoid/v2"
	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	RegisterUser(ctx context.Context, name, username, email, password, userAgent, ipAddress string) error
	LoginUser(ctx context.Context, usernameOrEmail, password, userAgent, ipAddress string, w http.ResponseWriter) error
	LogoutUser(w http.ResponseWriter) error
	GetUserBySessionID(ctx context.Context, sessionID string) (User, error)
}

type service struct {
	repo *UserRepository
}

func NewUserService(repo *UserRepository) Service {
	return &service{repo: repo}
}

func (s *service) LoginUser(ctx context.Context, usernameOrEmail string, password string, userAgent string, ipAddress string, w http.ResponseWriter) error {
	user, err := s.repo.GetUserByUsernameOrEmail(ctx, usernameOrEmail)
	if err != nil {
		return err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return err
	}

	id, err := gonanoid.New()
	if err != nil {
		return err
	}

	_, err = s.repo.CreateSession(ctx, user_db.CreateSessionParams{
		ID:        id,
		UserID:    user.ID,
		UserAgent: userAgent,
		IpAddress: ipAddress,
		ExpiresAt: pgtype.Timestamp{Time: time.Now().Add(time.Hour * 24), Valid: true },
		CreatedAt: pgtype.Timestamp{Time: time.Now(), Valid: true },
		UpdatedAt: pgtype.Timestamp{Time: time.Now(), Valid: true },
	})

	if err != nil {
		return err
	}

	w.Header().Set("Set-Cookie", fmt.Sprintf("session_id=%s; Path=/; HttpOnly; SameSite=Lax", id))

	return nil
}

func (s *service) RegisterUser(ctx context.Context, name, username, email, password, userAgent, ipAddress string) error {
	// Not matching username or email
	_, err := s.repo.GetUserByUsername(ctx, username)
	if err == nil {
		return errors.New("username already exists")
	}

	_, err = s.repo.GetUserByEmail(ctx, email)
	if err == nil {
		return errors.New("email already exists")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	id, err := gonanoid.New()
	avatar_url := fmt.Sprintf("https://avatars.dicebear.com/api/avataaars/%s.svg", username)
	user := user_db.CreateUserParams{
		ID:        id,
		AvatarUrl: avatar_url,
		Name:      name,
		Username:  username,
		Email:     email,

		Password:  string(hashedPassword),
	}

	err = s.repo.CreateUser(ctx, user)
	if err != nil {
		return err
	}

	return nil
}

func (s *service) LogoutUser(w http.ResponseWriter) error {
	w.Header().Set("Set-Cookie", "session_id=; Path=/; HttpOnly; SameSite=Lax; Max-Age=-1")
	return nil
}

func (s *service) GetUserBySessionID(ctx context.Context, sessionID string) (User, error) {
	session, err := s.repo.GetSessionWithUser(ctx, sessionID)
	if err != nil {
		return User{}, err
	}

	return User{
		ID:        session.UserID.String,
		Username:  session.Username.String,
		Email:     session.Email.String,
		Name:      session.Name.String,
		AvatarUrl: session.AvatarUrl.String,
	}, nil
}
