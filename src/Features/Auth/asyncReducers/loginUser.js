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
        throw new Error(JSON.stringify(error.response.data?.errors))
    }
});

const loginUser = (builder) => {
    builder
        .addCase(asyncLogin.pending, (state) => {
            state.loading = true;
            state.authenticated = false;
        })
        .addCase(asyncLogin.fulfilled, (state, action) => {
            console.log("all data", action.payload);
            try {
                let token = action.payload.data.token;
                let status = action.payload.status;
                if (status === 'success') {
                    window.localStorage.setItem('token', token);
                    state.authenticated = true;
                }
                state.authenticated = true;
                state.token = token;
                state.loading = false;
                state.formErrors = {};
            } catch (error) {
                console.log('error ',error);
            } 
        })
        .addCase(asyncLogin.rejected, (state, payload) => {
            state.loading = false;
            console.log(payload);
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