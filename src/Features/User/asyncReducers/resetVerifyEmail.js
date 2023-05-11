import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const resetVerifyApi = async (formData) => {
    const res = await axiosInstance.post('/resetverify', formData)
    return res.data;
}

export const asyncResetVerify = createAsyncThunk('user/resetVerifyEmail', async (formData) => {
    try {
        const user = await resetVerifyApi(formData);
        return user;
    } catch (error) {
        throw new Error(JSON.stringify(error.response.data?.errors))
        // console.log(error);
    }
});

const resetVerifyEmail = (builder) => {
    builder
        .addCase(asyncResetVerify.pending, (state) => {
            state.loading = true;
            state.authenticated = false;
            state.isError = false;
        })
        .addCase(asyncResetVerify.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.success_msg = action.payload.status;
            window.toast(action.payload.status,"success")
        })
        .addCase(asyncResetVerify.rejected, (state, payload) => {
            state.isLoading = false;
            state.isError = true;
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

export default resetVerifyEmail;