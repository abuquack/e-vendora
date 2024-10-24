// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0
// source: user.sql

package user_db

import (
	"context"

	"github.com/jackc/pgx/v5/pgtype"
)

const createSession = `-- name: CreateSession :one
INSERT INTO "sessions" 
       (id, user_id, user_agent, ip_address, expires_at, created_at, updated_at)
VALUES ($1,      $2,         $3,         $4,         $5,         $6,         $7)
RETURNING id, user_id, user_agent, ip_address, expires_at, created_at, updated_at
`

type CreateSessionParams struct {
	ID        string
	UserID    string
	UserAgent string
	IpAddress string
	ExpiresAt pgtype.Timestamp
	CreatedAt pgtype.Timestamp
	UpdatedAt pgtype.Timestamp
}

func (q *Queries) CreateSession(ctx context.Context, arg CreateSessionParams) (Session, error) {
	row := q.db.QueryRow(ctx, createSession,
		arg.ID,
		arg.UserID,
		arg.UserAgent,
		arg.IpAddress,
		arg.ExpiresAt,
		arg.CreatedAt,
		arg.UpdatedAt,
	)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.UserID,
		&i.UserAgent,
		&i.IpAddress,
		&i.ExpiresAt,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const createUser = `-- name: CreateUser :exec
INSERT INTO users (id, name, username, email, password, avatar_url) VALUES ($1, $2, $3, $4, $5, $6)
`

type CreateUserParams struct {
	ID        string
	Name      string
	Username  string
	Email     string
	Password  string
	AvatarUrl string
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) error {
	_, err := q.db.Exec(ctx, createUser,
		arg.ID,
		arg.Name,
		arg.Username,
		arg.Email,
		arg.Password,
		arg.AvatarUrl,
	)
	return err
}

const deleteUser = `-- name: DeleteUser :exec
DELETE FROM users WHERE id = $1
`

func (q *Queries) DeleteUser(ctx context.Context, id string) error {
	_, err := q.db.Exec(ctx, deleteUser, id)
	return err
}

const getSession = `-- name: GetSession :one
SELECT id, user_id, user_agent, ip_address, expires_at, created_at, updated_at
FROM "sessions"
WHERE id = $1
`

func (q *Queries) GetSession(ctx context.Context, id string) (Session, error) {
	row := q.db.QueryRow(ctx, getSession, id)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.UserID,
		&i.UserAgent,
		&i.IpAddress,
		&i.ExpiresAt,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getSessionWithUser = `-- name: GetSessionWithUser :one
SELECT 
    sessions.id as session_id,
    sessions.user_agent as session_user_agent,
    sessions.ip_address as session_ip_address,
    sessions.expires_at as session_expires_at,
    sessions.created_at as session_created_at,
    sessions.updated_at as session_updated_at,
    users.id as user_id,
    users.username as username,
    users.email,
    users.avatar_url,
    users.name
FROM "sessions"
LEFT JOIN users ON sessions.user_id = users.id
WHERE sessions.id = $1
`

type GetSessionWithUserRow struct {
	SessionID        string
	SessionUserAgent string
	SessionIpAddress string
	SessionExpiresAt pgtype.Timestamp
	SessionCreatedAt pgtype.Timestamp
	SessionUpdatedAt pgtype.Timestamp
	UserID           pgtype.Text
	Username         pgtype.Text
	Email            pgtype.Text
	AvatarUrl        pgtype.Text
	Name             pgtype.Text
}

func (q *Queries) GetSessionWithUser(ctx context.Context, id string) (GetSessionWithUserRow, error) {
	row := q.db.QueryRow(ctx, getSessionWithUser, id)
	var i GetSessionWithUserRow
	err := row.Scan(
		&i.SessionID,
		&i.SessionUserAgent,
		&i.SessionIpAddress,
		&i.SessionExpiresAt,
		&i.SessionCreatedAt,
		&i.SessionUpdatedAt,
		&i.UserID,
		&i.Username,
		&i.Email,
		&i.AvatarUrl,
		&i.Name,
	)
	return i, err
}

const getUser = `-- name: GetUser :one
SELECT id, avatar_url, name, username, email, password, phone_number, created_at, updated_at FROM users WHERE id = $1
`

func (q *Queries) GetUser(ctx context.Context, id string) (User, error) {
	row := q.db.QueryRow(ctx, getUser, id)
	var i User
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getUserByEmail = `-- name: GetUserByEmail :one
SELECT id, avatar_url, name, username, email, password, phone_number, created_at, updated_at FROM users WHERE email = $1
`

func (q *Queries) GetUserByEmail(ctx context.Context, email string) (User, error) {
	row := q.db.QueryRow(ctx, getUserByEmail, email)
	var i User
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getUserByUsername = `-- name: GetUserByUsername :one
SELECT id, avatar_url, name, username, email, password, phone_number, created_at, updated_at FROM users WHERE username = $1
`

func (q *Queries) GetUserByUsername(ctx context.Context, username string) (User, error) {
	row := q.db.QueryRow(ctx, getUserByUsername, username)
	var i User
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getUserByUsernameOrEmail = `-- name: GetUserByUsernameOrEmail :one
SELECT id, avatar_url, name, username, email, password, phone_number, created_at, updated_at FROM users WHERE username = $1 OR email = $1
`

func (q *Queries) GetUserByUsernameOrEmail(ctx context.Context, username string) (User, error) {
	row := q.db.QueryRow(ctx, getUserByUsernameOrEmail, username)
	var i User
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
	)
	return i, err
}

const getUserSessions = `-- name: GetUserSessions :many
SELECT id, user_id, user_agent, ip_address, expires_at, created_at, updated_at
FROM "sessions"
WHERE user_id = $1
`

func (q *Queries) GetUserSessions(ctx context.Context, userID string) ([]Session, error) {
	rows, err := q.db.Query(ctx, getUserSessions, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Session
	for rows.Next() {
		var i Session
		if err := rows.Scan(
			&i.ID,
			&i.UserID,
			&i.UserAgent,
			&i.IpAddress,
			&i.ExpiresAt,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getUserWithActiveSessions = `-- name: GetUserWithActiveSessions :one
SELECT users.id, avatar_url, name, username, email, password, phone_number, users.created_at, users.updated_at, sessions.id, user_id, user_agent, ip_address, expires_at, sessions.created_at, sessions.updated_at FROM users LEFT JOIN sessions ON users.id = sessions.user_id WHERE users.id = $1 AND sessions.expires_at > NOW()
`

type GetUserWithActiveSessionsRow struct {
	ID          string
	AvatarUrl   string
	Name        string
	Username    string
	Email       string
	Password    string
	PhoneNumber pgtype.Text
	CreatedAt   pgtype.Timestamp
	UpdatedAt   pgtype.Timestamp
	ID_2        pgtype.Text
	UserID      pgtype.Text
	UserAgent   pgtype.Text
	IpAddress   pgtype.Text
	ExpiresAt   pgtype.Timestamp
	CreatedAt_2 pgtype.Timestamp
	UpdatedAt_2 pgtype.Timestamp
}

func (q *Queries) GetUserWithActiveSessions(ctx context.Context, id string) (GetUserWithActiveSessionsRow, error) {
	row := q.db.QueryRow(ctx, getUserWithActiveSessions, id)
	var i GetUserWithActiveSessionsRow
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.ID_2,
		&i.UserID,
		&i.UserAgent,
		&i.IpAddress,
		&i.ExpiresAt,
		&i.CreatedAt_2,
		&i.UpdatedAt_2,
	)
	return i, err
}

const getUserWithSessions = `-- name: GetUserWithSessions :one
SELECT users.id, avatar_url, name, username, email, password, phone_number, users.created_at, users.updated_at, sessions.id, user_id, user_agent, ip_address, expires_at, sessions.created_at, sessions.updated_at FROM users LEFT JOIN sessions ON users.id = sessions.user_id WHERE users.id = $1
`

type GetUserWithSessionsRow struct {
	ID          string
	AvatarUrl   string
	Name        string
	Username    string
	Email       string
	Password    string
	PhoneNumber pgtype.Text
	CreatedAt   pgtype.Timestamp
	UpdatedAt   pgtype.Timestamp
	ID_2        pgtype.Text
	UserID      pgtype.Text
	UserAgent   pgtype.Text
	IpAddress   pgtype.Text
	ExpiresAt   pgtype.Timestamp
	CreatedAt_2 pgtype.Timestamp
	UpdatedAt_2 pgtype.Timestamp
}

func (q *Queries) GetUserWithSessions(ctx context.Context, id string) (GetUserWithSessionsRow, error) {
	row := q.db.QueryRow(ctx, getUserWithSessions, id)
	var i GetUserWithSessionsRow
	err := row.Scan(
		&i.ID,
		&i.AvatarUrl,
		&i.Name,
		&i.Username,
		&i.Email,
		&i.Password,
		&i.PhoneNumber,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.ID_2,
		&i.UserID,
		&i.UserAgent,
		&i.IpAddress,
		&i.ExpiresAt,
		&i.CreatedAt_2,
		&i.UpdatedAt_2,
	)
	return i, err
}

const getUsers = `-- name: GetUsers :many
SELECT id, avatar_url, name, username, email, password, phone_number, created_at, updated_at FROM users
`

func (q *Queries) GetUsers(ctx context.Context) ([]User, error) {
	rows, err := q.db.Query(ctx, getUsers)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []User
	for rows.Next() {
		var i User
		if err := rows.Scan(
			&i.ID,
			&i.AvatarUrl,
			&i.Name,
			&i.Username,
			&i.Email,
			&i.Password,
			&i.PhoneNumber,
			&i.CreatedAt,
			&i.UpdatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateUser = `-- name: UpdateUser :exec
UPDATE users SET username = $1, email = $2, password = $3, avatar_url = $4 WHERE id = $5
`

type UpdateUserParams struct {
	Username  string
	Email     string
	Password  string
	AvatarUrl string
	ID        string
}

func (q *Queries) UpdateUser(ctx context.Context, arg UpdateUserParams) error {
	_, err := q.db.Exec(ctx, updateUser,
		arg.Username,
		arg.Email,
		arg.Password,
		arg.AvatarUrl,
		arg.ID,
	)
	return err
}
