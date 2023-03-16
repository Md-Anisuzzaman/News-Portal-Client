import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const registerApi = async (formData) => {
    const res = await axiosInstance.post('/register', formData)
    return res.data;
}

export const asyncRegister = createAsyncThunk('user/registerUser', async (formData) => {
    try {
        const user = await registerApi(formData);
        return user;
    } catch (error) {
        throw new Error(JSON.stringify(error.response.data.errors))
    }
});

const registerUser = (builder) => {
    builder.addCase(asyncRegister.pending, (state) => {
        state.loading = true;
    }).addCase(asyncRegister.fulfilled, (state, action) => {
        let token = action.payload.data.token;
        let status = action.payload.status;
        if (status === 'success') {
            window.localStorage.setItem('token', token);
            state.authenticated = true;
        }
        state.token = token;
        state.loading = false;
        state.formErrors = {};
    }).addCase(asyncRegister.rejected, (state, payload) => {
        state.loading = false;
        let temp = {
            username: [],
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

export default registerUser;