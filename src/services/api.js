import axios from "axios";
import { response } from "express";
import AuthService from "./AuthService";

const api = axios.create({
    baseURL: "http://localhost:4000", //port de nodejs
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//intercepteur si l'utilisateur n'est pas authentifi il est rediriger vers la page de connexion
api.interceptors.response.use((response) => response,
(error) => {
    if(error.response.status ===401){
        AuthService.logout();
        window.location.href = "/login";    
    }
    return Promise.reject(error);
}
    
)
export default api;