import { createSlice } from '@reduxjs/toolkit';

const initialState = { search: null };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
