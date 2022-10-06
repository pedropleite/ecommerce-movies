import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        add(state, action) {
            const existingFavoriteItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingFavoriteItem = state.items[existingFavoriteItemIndex];
            let updatedItems;
            if (existingFavoriteItem) {
                updatedItems = [...state.items];
            } else {
                updatedItems = state.items.concat(action.payload);
            }
            state.items = updatedItems;
        },
        remove(state, action) {
            const updatedItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );

            state.items = updatedItems;
        },
        clear(state) {
            state.items = [];
        },
    },
});

export const favoriteActions = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
