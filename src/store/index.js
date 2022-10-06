import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './authSlice';
import { cartReducer } from './cartSlice';
import { searchReducer } from './searchSlice';
import { favoriteReducer } from './favoriteSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        search: searchReducer,
        favorite: favoriteReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
