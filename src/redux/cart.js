import { createSlice } from "@reduxjs/toolkit";

export  const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            value: [],
        },
        reducers: {
            addToCart: (state,action)=>{
                const inCart = state.value.findIndex(x => x.title === action.payload.title);
                inCart >= 0 ? state.value[inCart].quantity++ : state.value.push(action.payload);

            },
            changeQuantity: (state,action)=>{
                state.value.map(x => x.title === action.payload.title ? x.quantity = action.payload.value : x);
            }
        },
    }
)

export const {addToCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;