import { getCard, getInfo } from './../../thunks/hearthstoneThunk';
import { commonSliceIST } from './commonSliceT';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFreeGame } from '../../thunks/epicGamesThunk';

const initialState : commonSliceIST = {
    error : null,
    loading : false,
}

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers : {
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    },
    extraReducers : (builder) => { // без билдера не работает, но при этом без .type тоже
        builder.addCase(getFreeGame.rejected.type,(state, action: PayloadAction<string>) => {
            state.error = action.payload;
        })
        builder.addCase(getInfo.rejected.type,(state, action: PayloadAction<string>) => {
            state.error = action.payload;
        })
        builder.addCase(getCard.rejected.type,(state, action: PayloadAction<string>) => {
            state.error = action.payload;
        })
    }
})

export const {setError,setLoading} = commonSlice.actions
export default commonSlice.reducer 