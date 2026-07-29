import { createSlice } from '@reduxjs/toolkit'

const savedToken = localStorage.getItem("token")

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: savedToken || null,
        user: null,
        isLoggedIn: !!savedToken,
    },
    
reducers: {
    loginSuccess: (state, action) => {
        state.token = action.payload.token
        state.isLoggedIn = true
        localStorage.setItem("token", action.payload.token) 
    },
    logout: (state) => {
        state.token = null
        state.user = null
        state.isLoggedIn = false
        localStorage.removeItem("token")
    },
    setUser: (state, action) => {
        state.user = action.payload
    },
},
})

export const { loginSuccess, logout, setUser } = authSlice.actions
export default authSlice.reducer