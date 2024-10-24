package user

import (
	"time"

	user_db "github.com/abuquack/e-vendora/pkgs/user/db"
)

type User struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Username  string    `json:"username"`
	Email     string    `json:"email"`
	Password  string    `json:"-"`
	AvatarUrl string    `json:"avatar_url"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Session struct {
	ID        string    `json:"id"`
	UserID    string    `json:"user_id"`
	Token     string    `json:"token"`
	UserAgent string    `json:"user_agent"`
	IpAddress string    `json:"ip_address"`
	ExpiresAt time.Time `json:"expires_at"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type UserRepository = user_db.Queries

func NewUserRepository(db user_db.DBTX) *UserRepository {
	return user_db.New(db)
}
