import { GetFreeGamesT } from './../../../api/apiT';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFreeGame } from '../../thunks/epicGamesThunk';
import { EpicGamesIST } from './epicGamesT';

const initialState : EpicGamesIST = {
    current : [],
    upcoming : [],
}

const epicGamesSlice = createSlice ({
    name: "EpicGames",
    initialState,
    reducers: {

    },
    extraReducers : {
        [getFreeGame.fulfilled.type] : (state, action: PayloadAction<GetFreeGamesT>) => {
            state.current = action.payload.current.reverse();
            state.upcoming = action.payload.upcoming;
        },
    }
})

export default epicGamesSlice.reducer