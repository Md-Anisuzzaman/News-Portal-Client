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
        checkloginLoading: false,
        previousPath: ""
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        },
        setPath: (state, action) => {
            state.previousPath = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        removeErrors: (state, action) => {
            state.formErrors = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.authenticated = false;
            state.errors = null;
            window.localStorage.removeItem("token");
        },
        checkLogIn: (state, action) => {
            if (window.localStorage.token) {
                state.token = window.localStorage.token;
                state.authenticated = true;
            }
            state.checkloginLoading = false;
        },
    },
    extraReducers: (builder) => {
        registerUser(builder)
        loginUser(builder)
    },
});

export const { logout, checkLogIn, removeErrors, setAuthenticated, setToken, setPath } = authSlice.actions;
export default authSlice;