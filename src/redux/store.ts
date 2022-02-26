import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/mainSlice";

const store = configureStore({
    reducer:{
        main:mainSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;
export default store