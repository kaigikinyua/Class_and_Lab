package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

// Define a simple structure for response data
type APIStatus struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func main() {
	// Register the handler function for the "/" route
	http.HandleFunc("/", homePage)

	// Start the HTTP server on port 8080
	fmt.Println("Server starting on port 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

// homePage is the handler function for the "/" route
func homePage(w http.ResponseWriter, r *http.Request) {
	// Set the response header to indicate JSON content
	w.Header().Set("Content-Type", "application/json")

	// Create the response data
	response := APIStatus{Status: "OK", Message: "Welcome to the API!"}

	// Encode the response to JSON and write it to the response writer
	json.NewEncoder(w).Encode(response)
}
