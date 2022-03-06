import { GetFreeGamesT } from './../../../api/apiT';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFreeGame } from '../../thunks/epicGamesThunk';
import { EpicGamesIST } from './epicGamesT';

const initialState : EpicGamesIST = {
    current : [],
    upcoming : [],
    error : null,
}

const epicGamesSlice = createSlice ({
    name: "EpicGames",
    initialState,
    reducers: {

    },
    extraReducers : {
        [getFreeGame.fulfilled.type] : (state, action: PayloadAction<GetFreeGamesT>) => {
            state.current = action.payload.current;
            state.upcoming = action.payload.upcoming;
        },
        [getFreeGame.rejected.type] : (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
})

export default epicGamesSlice.reducer