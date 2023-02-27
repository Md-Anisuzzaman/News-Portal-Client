import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const setRoleApi = async (formData) => {
    const res = await axiosInstance.post('/makeAdmin',formData);
    return res.data;
}

export const asyncSetRole= createAsyncThunk('user/createUser', async (formData) => {
    try {
        const user = await setRoleApi(formData);
        return user;
    } catch (error) {
        console.log("kno error--> ", error.message);
    }
});

const SetRole = (builder) => {
    builder.addCase(asyncSetRole.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncSetRole.fulfilled, (state, { payload }) => {
        state.isLoading = false
        console.log("amar payload",payload);
        state.user = payload;
    }).addCase(asyncSetRole.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
    });


}
export default SetRole;