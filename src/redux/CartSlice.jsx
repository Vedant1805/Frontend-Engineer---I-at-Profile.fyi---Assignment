import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(product => product.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

export default cartSlice.reducer;
export const { addtoCart, removeFromCart, updateQuantity } = cartSlice.actions;
