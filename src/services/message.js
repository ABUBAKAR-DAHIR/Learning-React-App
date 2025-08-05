import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL
console.log("BASE_URL: " + BASE_URL);


export async function sendMessage(email, message) {
    try{
        const response = await axios.post(`${BASE_URL}/msg/message`, {email, message})
        return response.data
    }
    catch(error){
        throw error.response?.data?.message || "Something went wrong"
    }
}