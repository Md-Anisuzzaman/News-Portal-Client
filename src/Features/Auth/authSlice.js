import { createSlice } from '@reduxjs/toolkit'
import authMiddleWare from './asyncReducers/authMiddleWare';
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
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
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
        authMiddleWare(builder)
    },
});

export const { logout, checkLogIn, removeErrors, setAuthenticated, setToken } = authSlice.actions;
export default authSlice;