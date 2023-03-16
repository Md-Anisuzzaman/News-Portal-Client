import { createSlice } from '@reduxjs/toolkit'
import loginUser from './asyncReducers/loginUser';
import registerUser from './asyncReducers/registerUser';



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        authenticated: false,
        token: null,
        formErrors: {},
        checkloginLoading: false
    },
    reducers: {
        removeErrors: (state, action) => {
            state.formErrors = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.authenticated = false;
            state.errors = null;
            localStorage.removeItem("token");
        },
        checkLogIn: (state) => {
            if (localStorage.token) {
                state.authenticated = true;
                // state.token = localStorage.token;
            }
            state.checkloginLoading = false;

        },
    },
    extraReducers: (builder) => {
        registerUser(builder)
        loginUser(builder)
    },

});

export const { logout, checkLogIn, removeErrors} = authSlice.actions;
export default authSlice;