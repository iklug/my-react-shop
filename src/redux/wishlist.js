import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice(
    {
        name: 'wishlist',
        initialState: {
            value: [],
        },
        reducers: {
            add: (state, action) => {
                const title = action.payload.title;
                const found = state.value.findIndex(x => x.title === title);
                found >= 0 ? state.value.splice(found, 1) : state.value.push(action.payload);    
            },
        }
    }
)

export const {add} = wishlistSlice.actions;

export default wishlistSlice.reducer;