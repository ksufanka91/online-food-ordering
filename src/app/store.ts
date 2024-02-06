import {combineSlices, configureStore} from "@reduxjs/toolkit";
import counterSlice from "@/app/features/counter/counterSlice";
import catalogSlice from "@/app/features/catalog/catalogSlice";

const rootReducer = combineSlices({
    counter: counterSlice,
    catalog: catalogSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;