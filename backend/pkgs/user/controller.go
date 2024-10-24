package user

import (
	"encoding/json"
	"log"
	"net/http"
)

type UserController struct {
	service Service
}

func NewUserController(service Service) *UserController {
	return &UserController{service: service}
}

func (c *UserController) Register(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Name     string `json:"name"`
		Username string `json:"username"`
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{"message": "Following fields are required: name, username, email, password"})
		return
	}

	log.Printf("User Agent in this request: %v",r.UserAgent());
	err := c.service.RegisterUser(r.Context(), req.Name, req.Username, req.Email, req.Password, r.UserAgent(), r.RemoteAddr)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "user_registered"})
}

func (c *UserController) Login(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UsernameOrEmail string `json:"username_or_email"`
		Password        string `json:"password"`
	}

	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err := c.service.LoginUser(r.Context(), req.UsernameOrEmail, req.Password, r.UserAgent(), r.RemoteAddr, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "user_logged_in"})
}

func (c *UserController) Logout(w http.ResponseWriter, r *http.Request) {
	err := c.service.LogoutUser(w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func (c *UserController) GetMe(w http.ResponseWriter, r *http.Request) {
	sessionID := ""
	for _, cookie := range r.Cookies() {
		if cookie.Name == "session_id" {
			sessionID = cookie.Value
			break
		}
	}

	user, err := c.service.GetUserBySessionID(r.Context(), sessionID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(user)
}
