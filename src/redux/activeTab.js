


import { createSlice } from "@reduxjs/toolkit";


export const activeTabSlice = createSlice(
    {
        name: 'activeTab',
        initialState: {
            value: '',
        },
        reducers: {
            changeTab: (state, action) => {
                 state.value = action.payload;   
            },
        },
    }
);

export const {changeTab} = activeTabSlice.actions;

export default activeTabSlice.reducer;