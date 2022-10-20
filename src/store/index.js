import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/authSlice';
import { cartReducer } from './slices/cartSlice';
import { searchReducer } from './slices/searchSlice';
import { favoriteReducer } from './slices/favoriteSlice';

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
