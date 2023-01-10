import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((product) => product.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            product.quantity++;
        },
        decrementQuantity: (state, action) => {
            const product = state.cart.find((product) => product.id === action.payload);
            if (product.quantity === 1) {
                product.quantity = 1
            } else {
                product.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((product) => product.id !== action.payload);
            state.cart = removeItem;
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;