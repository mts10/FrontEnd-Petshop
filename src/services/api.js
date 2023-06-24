import axios from "axios";

const urlBack = "http://localhost:5000"

const api = axios.create({
    baseURL: urlBack,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;