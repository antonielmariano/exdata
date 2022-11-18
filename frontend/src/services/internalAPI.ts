import axios from "axios";


export const internalAPI = axios.create({
    baseURL: "http://localhost:8000/api/"
})