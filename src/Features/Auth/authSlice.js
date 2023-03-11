import { createSlice } from '@reduxjs/toolkit'
import loginUser from './asyncReducers/loginUser';
import registerUser from './asyncReducers/registerUser';



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        authenticated: false,
        token: null,
        error: null,
        checkloginLoading: false
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.authenticated = false;
            state.error = null;
            localStorage.removeItem("token");
        },

        checkLogIn: (state) => {
            if (localStorage.token) {
                state.authenticated = true;
                state.token = localStorage.token;
            }
            state.checkloginLoading = true;
        },
    },

    extraReducers: (builder) => {
        registerUser(builder)
        loginUser(builder)
    },

});

export const { logout, checkLogIn } = authSlice.actions;
export default authSlice;