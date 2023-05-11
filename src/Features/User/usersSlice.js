import { createSlice } from '@reduxjs/toolkit'
import createUser from './asyncReducers/createUser';
import fetchUser from './asyncReducers/fetchUser';
import fetchUsers from './asyncReducers/fetchUsers';
import updateUser from './asyncReducers/updateUser';
import resetVerifyEmail from './asyncReducers/resetVerifyEmail';
import resetPassForm from './asyncReducers/resetPassForm';

const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        users: [],
        user: {},
        userInfo: {},
        formErrors: {},
        selectedUsers: [],
        searchKey: '',
        paginate: 10,
        currentPage: 1,
        isLoading: false,
        isError: false,
        error_for: '',
        error_msg: '',
        success_for: '',
        success_msg: '',
        error: [],
    },
    reducers: {
        verifyEmailErr: (state, action) => {
            state.formErrors = action.payload;
        },
    },
    extraReducers: (builder) => {
        fetchUsers(builder)
        fetchUser(builder)
        createUser(builder)
        updateUser(builder)
        resetVerifyEmail(builder)
        resetPassForm(builder)
    },

});

// export const userActions = userSlice.actions;
export const {verifyEmailErr} = userSlice.actions;
export default userSlice;