import {combineSlices, configureStore} from "@reduxjs/toolkit";
import catalogSlice from "@/app/features/catalog/catalogSlice";
import categoriesSlice from "@/app/features/categories/categoriesSlice";
import cartSlice from "@/app/features/cart/cartSlice";
import promoSlice from "@/app/features/promo/PromoSlice";

const rootReducer = combineSlices({
    catalog: catalogSlice,
    category: categoriesSlice,
    cart: cartSlice,
    promo: promoSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;