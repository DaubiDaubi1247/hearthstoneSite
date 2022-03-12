import { createAsyncThunk } from "@reduxjs/toolkit";
import {cardAPI} from "../../api/api";
import { setLoading } from "../slices/commonSlice/commonSlice";


export const getInfo = createAsyncThunk(
    "main/getInfo",
    async (_,thunkApi) => {
        try {
            const response = await cardAPI.getInfo();
            thunkApi.dispatch(setLoading(false))

            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue("Что то пошло не так ...")
        }
    }
)
export const getCard = createAsyncThunk(
    "main/getCard",
    async (name : string,thunkApi) => {
        try {
            const response = await cardAPI.getCardByNameOrId(name)
            thunkApi.dispatch(setLoading(false))

            return response.data
        }
        catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }    
)


