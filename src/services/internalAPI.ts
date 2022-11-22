import axios from "axios";


export const internalAPI = axios.create({
    baseURL: "https://django-server-production-598f.up.railway.app/api/"
})