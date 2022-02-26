import { createAsyncThunk } from "@reduxjs/toolkit";
import cardAPI from "../../api/api";


export const getCard = createAsyncThunk(
    "main/getCard",
    async (name : string,thunkApi) => {
        try {
            const response = await cardAPI.getCardByNameOrId(name)
            return response.data
        }
        catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }    
)
