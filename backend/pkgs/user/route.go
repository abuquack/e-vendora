package user

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func UserRoutes(controller *UserController) *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Post("/register", controller.Register)
	r.Post("/login", controller.Login)
	r.Post("/logout", controller.Logout)
	r.Get("/me", controller.GetMe)

	return r
}
