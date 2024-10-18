import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token') || null,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload.token);
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            state.token = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;