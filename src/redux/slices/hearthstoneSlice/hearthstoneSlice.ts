import { getCard, getInfo } from '../../thunks/hearthstoneThunk';
import { GetCardT, GetInfoT } from '../../../api/apiT';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateT } from "./hearthstoneSliceT";

const initialState: InitialStateT = {
    cardsInfo: [],
    infoAboutRequests : null,
    userInput : "",
}

const hearthstoneSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setInput(state, action: PayloadAction<string>) {
            state.userInput = action.payload
        },
    },
    extraReducers: {
        [getCard.fulfilled.type]: (state, action: PayloadAction<GetCardT>) => {
            state.cardsInfo = action.payload
        },
        [getInfo.fulfilled.type]: (state, action: PayloadAction<GetInfoT>) => {

            if(action.payload.hasOwnProperty("patch")) delete action.payload["patch"];

            if(action.payload.hasOwnProperty("locales")) delete action.payload["locales"];

            state.infoAboutRequests = action.payload
        },
        
    }
})

export default hearthstoneSlice.reducer
export const {setInput} = hearthstoneSlice.actions;