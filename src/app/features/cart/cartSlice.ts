import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Product from "@/app/models/Product";

interface ProductInCart extends Product {
    count: number;
}

type InitialState = {
    products: ProductInCart[],
}

const initialState: InitialState = {
    products: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const sameElementInCart = state.products.find(item => item.id === action.payload.id);

            if (sameElementInCart) {
                state.products = state.products.map(item => {
                    if (item.id === action.payload.id) {
                        item.count++;
                    }

                    return item;
                });
            } else {
                state.products = [...state.products, {...action.payload, count: 1}]
            }
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const sameElementInCart = state.products.find(item => item.id === action.payload.id);

            if (sameElementInCart) {
                state.products = state.products.map(item => {
                    if (item.id === action.payload.id) {
                        item.count--;
                    }

                    return item;
                }).filter(item => item.count > 0)
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;