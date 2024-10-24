-- name: GetUser :one
SELECT * FROM users WHERE id = $1;

-- name: GetUserByEmail :one
SELECT * FROM users WHERE email = $1;

-- name: GetUserByUsername :one
SELECT * FROM users WHERE username = $1;

-- name: GetUserByUsernameOrEmail :one
SELECT * FROM users WHERE username = $1 OR email = $1;

-- name: CreateUser :exec
INSERT INTO users (id, name, username, email, password, avatar_url) VALUES ($1, $2, $3, $4, $5, $6);

-- name: UpdateUser :exec
UPDATE users SET username = $1, email = $2, password = $3, avatar_url = $4 WHERE id = $5;

-- name: DeleteUser :exec
DELETE FROM users WHERE id = $1;

-- name: GetUsers :many
SELECT * FROM users;

-- name: GetUserWithSessions :one
SELECT * FROM users LEFT JOIN sessions ON users.id = sessions.user_id WHERE users.id = $1;

-- name: GetUserWithActiveSessions :one
SELECT * FROM users LEFT JOIN sessions ON users.id = sessions.user_id WHERE users.id = $1 AND sessions.expires_at > NOW();

-- name: CreateSession :one
INSERT INTO "sessions" 
       (id, user_id, user_agent, ip_address, expires_at, created_at, updated_at)
VALUES ($1,      $2,         $3,         $4,         $5,         $6,         $7)
RETURNING id, user_id, user_agent, ip_address, expires_at, created_at, updated_at;

-- name: GetSession :one
SELECT *
FROM "sessions"
WHERE id = $1;

-- name: GetSessionWithUser :one
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
WHERE sessions.id = $1;

-- name: GetUserSessions :many
SELECT *
FROM "sessions"
WHERE user_id = $1;
