import axios from "axios";
export const baseurl = "http://localhost:8000"
const axiosInstance = axios.create({
    baseURL: baseurl,
});

export default axiosInstance;