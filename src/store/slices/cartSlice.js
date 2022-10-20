import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const updatedTotalAmount = state.totalAmount + action.payload.price;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + 1,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.payload);
            }

            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;
        },
        remove(state, action) {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updatedTotalAmount = state.totalAmount - existingItem.price;

            let updatedItems;
            if (existingItem.amount === 1) {
                updatedItems = state.items.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            state.items = updatedItems;
            state.totalAmount = updatedTotalAmount;
        },
        clear(state) {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
