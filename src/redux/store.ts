import { configureStore } from "@reduxjs/toolkit";
import epicGamesSlice from "./slices/epicGamesSlice/epicGamesSlice";
import hearthstoneSlice from "./slices/hearthstoneSlice/hearthstoneSlice";

const store = configureStore({
    reducer:{
        hearthstone:hearthstoneSlice,
        epicGames : epicGamesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store;
export default store