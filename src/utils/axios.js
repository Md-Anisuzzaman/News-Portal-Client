import axios from "axios";
export const baseurl = "http://localhost:5000"
const axiosInstance = axios.create({
    baseURL: baseurl,
});

export default axiosInstance;