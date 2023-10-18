import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import activeTabReducer from './activeTab';
import wishlistReducer from './wishlist';
import cartReducer from './cart';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        activeTab: activeTabReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
    },
});


