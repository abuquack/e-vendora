package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/abuquack/e-vendora/pkgs/config"
	"github.com/abuquack/e-vendora/pkgs/user"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/jackc/pgx/v5"
)

var PORT = 8080

func main() {
	log.Printf("Initializing server on port %d\n", PORT)
	config := config.NewConfigFromEnv()

	conn, err := pgx.Connect(context.Background(), config.DBUrl)
	log.Printf("Connected to database: %v\n", conn)

	if err != nil {
		log.Fatalf("Unable to connect to database: %v", err)
	}

	defer conn.Close(context.Background())

	repo := user.NewUserRepository(conn)
	service := user.NewUserService(repo)
	controller := user.NewUserController(service)
	route := user.UserRoutes(controller)

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Compress(5))
	r.Use(middleware.CleanPath)
	r.Use(middleware.StripSlashes)

	r.Mount("/api/v1/user", route)
	r.Route("/", func(r chi.Router) {
		r.Get("/", func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("Server is up and running!"))
		})

		r.Post("/", func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusOK)
			w.Write([]byte("Server is up and running!"))
		})
	})

	log.Printf("Server is running on port %d\n", PORT)
	http.ListenAndServe(fmt.Sprintf(":%d", PORT), r)
}
