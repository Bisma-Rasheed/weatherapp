import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    temp: 0,
    country: []
}
const TempSlice = createSlice({
    name: "tempSlice",
    initialState,
    reducers:{
        setTemp: (state, action) => {
            state.country = [...state.country, action.payload]
        }
    },
    extraReducers: {

    }
});

export const {setTemp} = TempSlice.actions;
export default TempSlice.reducer;