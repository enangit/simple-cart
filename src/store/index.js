import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";


const store = configureStore({
    reducer: cartSlice.reducer
});

export const cartReducers = cartSlice.actions

export default store;
