import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../utils/axios";

export const resetPassFormApi = async (formData) => {
    const res = await axiosInstance.post('/resetpass', formData)
    return res.data;
}
export const asyncResetPassForm = createAsyncThunk('user/resetPassForm', async (formData) => {
    try {
        const result = await resetPassFormApi(formData);
        console.log("resilt......", result);
        return result;
    } catch (error) {
        throw new Error(JSON.stringify(error.response.data))
    }
});

const resetPassForm = (builder) => {
    builder
        .addCase(asyncResetPassForm.pending, (state) => {
            state.loading = true;
            state.authenticated = false;
            state.isError = false;
            state.error_for = "";
            state.error_msg = "";
        })
        .addCase(asyncResetPassForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success_msg = action.payload.success_msg;
            state.success_for = action.payload.success_for;
            window.toast(action.payload.success_for,"success");
        })
        .addCase(asyncResetPassForm.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            let errors = JSON.parse(action.error.message);
            window.toast(errors.error_for,"error");
            console.log(errors.error_msg);
            state.error_for = errors.error_for
            state.error_msg = errors.error_msg
            // state.error = state.error.push(action.error.message);
        });
}
export default resetPassForm;