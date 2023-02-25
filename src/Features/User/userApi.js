import axios from "../../utils/axios";


export const getUsersApi = async () => {
    const res = await axios.get('/allusers');
    return res.data;
}
export const getUserApi = async (id) => {
    const res = await axios.get(`/user/${id}`);
    return res.data;
}
export const createUserApi = async (formData) => {
    const res = await axios.post('/adduser',formData)
    return res.data;
}
export const updateUserApi= async (formData) => {
    const res = await axios.post(`/updateuser`,formData)
    return res.data;
}