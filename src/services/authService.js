import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL
console.log("BASE_URL: " + BASE_URL)

export async function registerUser(email, password){
    try{
        const response = await axios.post(`${BASE_URL}/auth/register`, {email, password})
        return response.data
    }
    catch(error){
        throw error.response?.data?.message || "Somathing went wrong"
    }
}

export async function loginUser(email, password){
    try{
        const response = await axios.post(`${BASE_URL}/auth/login`, {email, password})
        return response.data
    }
    catch(error){
        throw error.response?.data?.message || "Something went wrong"
    }
}