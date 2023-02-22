import axios from "../../Axios/axios";

export const getUsers = () => async () => {
    const res = await axios.get("/allusers");
    return res.data;
}