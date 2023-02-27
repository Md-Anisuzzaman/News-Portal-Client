import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";


export const deleteUserApi= async (id) => {
    const res = await axiosInstance.post(`/deleteuser/${id}`)
    return res.data;
}

export const asyncDeleteUser = createAsyncThunk('user/deleteUser', async (id) => {
    try {
        const user = await deleteUserApi(id);
        return user;
    } catch (error) {
        console.log("Delete user error ", error.message);
    }
});

const deleteUser = (builder) => {
    builder.addCase(asyncDeleteUser.pending, (state) => {
        state.isLoading = true;
    }).addCase(asyncDeleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload;
    }).addCase(asyncDeleteUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
    });


}
export default deleteUser;