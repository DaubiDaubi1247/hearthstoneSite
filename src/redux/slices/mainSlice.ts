import { getCard } from './../thunks/mainThunk';
import { GetCardT } from './../../api/apiT';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateT } from "./mainSliceT";

const initialState: InitialStateT = {
    cardsInfo: [],
    userInput : "",
    requestError: null
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setInput(state, action: PayloadAction<string>) {
            state.userInput = action.payload
        },
        setRequestError(state, action: PayloadAction<string | null>) {
            state.requestError = action.payload
        }
    },
    extraReducers: {
        [getCard.fulfilled.type]: (state, action: PayloadAction<GetCardT>) => {
            state.cardsInfo = action.payload
        },
        [getCard.rejected.type]: (state, action: PayloadAction<string>) => {
            state.requestError = action.payload
        }
    }
})

export default mainSlice.reducer
export const {setInput,setRequestError} = mainSlice.actions;