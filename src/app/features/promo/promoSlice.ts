import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Promo from "@/app/models/Promo";

type stateType = {
    loading: boolean,
    promos: Promo[],
    error: string,
}

const initialState: stateType = {
    loading: false,
    promos: [],
    error: '',
}

export const fetchPromos = createAsyncThunk<Promo[]>('promo/fetchPromos', async () => {
    const response = await fetch('data/promo.json');
    const promos = await response.json() as Promo[];

    return promos;
})

export const promoSlice = createSlice({
    name: 'promo',
    initialState,
    reducers: {
        _: () => {}
    },
    extraReducers: builder => {
        builder.addCase(fetchPromos.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchPromos.fulfilled, (state, action: PayloadAction<Promo[]>) => {
            state.loading = false;
            state.promos = action.payload;
            state.error = '';
        });
        builder.addCase(fetchPromos.rejected, (state, action) => {
            state.loading = false;
            state.promos = [];
            state.error = action.error.message || 'Что-то пошло не так';
        })
    }
})

export default promoSlice.reducer;