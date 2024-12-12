import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', 
    headers: {
        "Content-Type": 'application/json', // Same as Postman
    },
    withCredentials:true
});
export default axiosInstance;
