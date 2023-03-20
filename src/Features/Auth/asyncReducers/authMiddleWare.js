import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utils/axios';

export const authApi = async (token) => {
    const res = await axiosInstance.get('/auth/checkuser', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data;
}
export const asynccheckAuthorizationToken = createAsyncThunk('user/asynccheckAuthorizationToken', async (token) => {
    console.log("token koi vaiya", token);
    try {
        const user = await authApi(token);
        console.log("authmiddleware user", user);
        return user;
    } catch (error) {
        console.log("authmiddleware error", error);
        throw new Error(JSON.stringify(error.response.data.errors))
    }
});

const authMiddleWare = (builder) => {
    builder
        .addCase(asynccheckAuthorizationToken.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(asynccheckAuthorizationToken.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload;
            state.authenticated = true;
        })
        .addCase(asynccheckAuthorizationToken.rejected, (state, action) => {
            state.loading = false;
            state.authenticated = false;
        });
}

export default authMiddleWare;
