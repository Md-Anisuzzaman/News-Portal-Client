import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsers,postUser } from './userApi';

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const users = await getUsers();
        return users;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});
export const createUser = createAsyncThunk('user/createUser', async (formData) => {
    try {
        const users = await postUser(formData);
        return users;
    } catch (error) {
        console.log("kno error --> ", error.message);
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload;

        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false
            state.users = [];
            state.isError = true
            state.error = action.error?.message
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload;
        });
    },

});

export default userSlice.reducer;