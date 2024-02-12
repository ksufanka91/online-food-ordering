import {combineSlices, configureStore} from "@reduxjs/toolkit";
import counterSlice from "@/app/features/counter/counterSlice";
import catalogSlice from "@/app/features/catalog/catalogSlice";
import categoriesSlice from "@/app/features/categories/categoriesSlice";

const rootReducer = combineSlices({
    counter: counterSlice,
    catalog: catalogSlice,
    category: categoriesSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;