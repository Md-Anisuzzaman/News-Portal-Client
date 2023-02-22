import axios from "../../utils/axios";


export const getUsers = async () => {
    const res = await axios.get('/allusers');
    return res.data;
}
export const postUser = async (formData) => {
    const res = await axios.post('/adduser',formData)
    return res.data;
}