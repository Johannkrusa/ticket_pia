import axios from "axios";
import dotenv from 'dotenv'

const baseURL = process.env.API_URL || "http://localhost:8000/";

export const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use(
    config => {
        console.log(baseURL)
        const token = localStorage.getItem('tkn')
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

