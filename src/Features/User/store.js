import { createSlice } from '@reduxjs/toolkit'
import createUser from './asyncReducers/createUser';
import fetchUser from './asyncReducers/fetchUser';
import fetchUsers from './asyncReducers/fetchUsers';
import updateUser from './asyncReducers/updateUser';

const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        users: [],
        user: {},
        selectedUsers: [],
        searchKey: '',
        paginate: 10,
        currentPage: 1,

        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {
    },
    extraReducers: (builder) => {
        fetchUsers(builder)
        fetchUser(builder)
        createUser(builder)
        updateUser(builder)
    },

});

export const userActions = userSlice.actions;
export default userSlice;