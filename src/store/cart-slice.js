import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartIsShown: false,
        items: [],
    },
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown
        },
        addItem(state, action) {
            const { name, id, price } = action.payload
            const existingItem = state.items.find(item => item.id === id);

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
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            } else {
                state.items.splice(state.items.indexOf(existingItem), 1);
            }
        },

        increaseItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.quantity * existingItem.price
            } else {
                return
            }
        },
    }
});


export default cartSlice;
