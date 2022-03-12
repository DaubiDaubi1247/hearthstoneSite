import { createAsyncThunk } from "@reduxjs/toolkit";
import { epicGamesAPI } from "../../api/api";
import { setLoading } from '../slices/commonSlice/commonSlice';


export const getFreeGame = createAsyncThunk(
    "epicGames/getFreeGames",
    async (_,thunkApi) => {
        try {
            const response = await epicGamesAPI.getFreeGames()
            thunkApi.dispatch(setLoading(false));
            return response.data.freeGames
        } catch (error) {
            thunkApi.rejectWithValue("Что то пошло не так ...")
        }
    }
)