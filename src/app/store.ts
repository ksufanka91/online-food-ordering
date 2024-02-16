import {combineSlices, configureStore} from "@reduxjs/toolkit";
import counterSlice from "@/app/features/counter/counterSlice";
import catalogSlice from "@/app/features/catalog/catalogSlice";
import categoriesSlice from "@/app/features/categories/categoriesSlice";
import cartSlice from "@/app/features/cart/cartSlice";

const rootReducer = combineSlices({
    counter: counterSlice,
    catalog: catalogSlice,
    category: categoriesSlice,
    cart: cartSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;