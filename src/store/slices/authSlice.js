import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
