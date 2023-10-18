import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';
import activeTabReducer from './activeTab'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        activeTab: activeTabReducer,
    },
});


