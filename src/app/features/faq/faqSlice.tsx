import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Faq from "@/app/models/Faq";

type stateType = {
    loading: boolean,
    faqs: Faq[],
    error: string,
}

const initialState: stateType = {
    loading: false,
    faqs: [],
    error: '',
}

export const fetchFaqs = createAsyncThunk<Faq[]>('faqs/fetchFaqs', async () => {
    const response = await fetch('data/faq.json');
    const faqs = await response.json() as Faq[];

    return faqs;
})

export const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        _: () => {}
    },
    extraReducers: builder => {
        builder.addCase(fetchFaqs.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<Faq[]>) => {
            state.loading = false;
            state.faqs = action.payload;
            state.error = '';
        });
        builder.addCase(fetchFaqs.rejected, (state, action) => {
            state.loading = false;
            state.faqs = [];
            state.error = action.error.message || 'Что-то пошло не так';
        })
    }
})

export default faqSlice.reducer;
