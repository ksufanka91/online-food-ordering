import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import Category from "@/app/models/Category";

type stateType = {
    loading: boolean,
    categories: Category[],
    error: string,
}

const initialState: stateType = {
    loading: false,
    categories: [],
    error: '',
}

export const fetchCategories = createAsyncThunk<Category[]>('category/fetchCategories', async () => {
    const response = await fetch('/data/categories.json');
    const categories = await response.json() as Category[];

    if (!Array.isArray(categories)) {
        throw new Error('Неправильный формат категории');
    }

    return categories;
});

export const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        _: () => {}
    },
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
            state.loading = false;
            state.categories = action.payload;
            state.error = '';
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.categories = [];
            state.error = action.error.message || 'Что-то пошло не так';
        })
    }
})

export default categoriesSlice.reducer;
