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
        console.log("kno error--> ", error.message);
        throw new Error(error.message);
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
            state.error = null;
        })
        .addCase(asyncLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
}

export default loginUser;