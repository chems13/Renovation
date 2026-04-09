import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000" //port de nodejs
});

export default api;