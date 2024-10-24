-- migrate:up
CREATE TABLE "users" (
    "id" VARCHAR(255) NOT NULL PRIMARY KEY,
    "avatar_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "sessions" (
    "id" VARCHAR(255) NOT NULL PRIMARY KEY,
    "user_id" VARCHAR(255) NOT NULL,
    "user_agent" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "expires_at" TIMESTAMP NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id") 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- migrate:down
DROP TABLE "sessions";
DROP TABLE "users";
