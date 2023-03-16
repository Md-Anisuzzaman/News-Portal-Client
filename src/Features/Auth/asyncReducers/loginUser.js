import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const loginApi = async (formData) => {
    const res = await axiosInstance.post('/login', formData)
    return res.data;
}

export const asyncLogin = createAsyncThunk('user/loginUser', async (formData) => {
    try {
        const user = await loginApi(formData);
        return user;
    } catch (error) {
        throw new Error(JSON.stringify(error.response.data.errors))
    }
});

const loginUser = (builder) => {
    builder
        .addCase(asyncLogin.pending, (state) => {
            state.loading = true;
        })
        .addCase(asyncLogin.fulfilled, (state, action) => {
            let token = action.payload.data.token;
            let status = action.payload.status;
            if (status === 'success') {
                window.localStorage.setItem('token', token);
                state.authenticated = true;
            }
            console.log("paichi", state.authenticated);
            state.token = token;
            state.loading = false;
            state.formErrors = {};
        })
        .addCase(asyncLogin.rejected, (state, payload) => {
            state.loading = false;
            let temp = {
                email: [],
                password: []
            }
            JSON.parse(payload.error.message)?.map(err => {
                temp[err.param].push(<li>{err.msg}</li>)
                return err;
            })
            state.formErrors = temp;
        });
}

export default loginUser;