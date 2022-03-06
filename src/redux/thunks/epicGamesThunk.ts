import { createAsyncThunk } from "@reduxjs/toolkit";
import { epicGamesAPI } from "../../api/api";


export const getFreeGame = createAsyncThunk(
    "epicGames/getFreeGames",
    async (_,thunkApi) => {
        try {
            const response = await epicGamesAPI.getFreeGames()
            return response.data.freeGames
        } catch (error) {
            thunkApi.rejectWithValue("Что то пошло не так ...")
        }
    }
)