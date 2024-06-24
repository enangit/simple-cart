import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartIsShown: false,
        items: [],
        totalQuantity: 0
    },
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown
        },
        addItem(state, action) {
            const { name, id, price } = action.payload
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity += 1;

            if (!existingItem) {
                state.items.push({
                    id: id,
                    name: name,
                    price: parseFloat(price),
                    quantity: 1,
                    totalPrice: parseFloat(price)
                });
            } else {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity -= 1;

            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            } else {
                state.items.splice(state.items.indexOf(existingItem), 1);
            }
        },

    }
});


export default cartSlice;
