import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import Product from "@/app/models/Product";

type stateType = {
    loading: boolean,
    products: Product[],
    error: string,
}

const initialState: stateType = {
    loading: false,
    products: [],
    error: '',
}

export const fetchProducts = createAsyncThunk<Product[]>('product/fetchProducts', async () => {
    const response = await fetch('data/products.json');
    const products = await response.json() as Product[];

    if (!Array.isArray(products)) {
        throw new Error('Неправильный формат товаров');
    }

    return products;
});

export const catalogSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        _: () => {}
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading = false;
            state.products = action.payload;
            state.error = '';
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.products = [];
            state.error = action.error.message || 'Что-то пошло не так';
        })
    }
})

export default catalogSlice.reducer;
