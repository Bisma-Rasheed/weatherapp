import { configureStore} from "@reduxjs/toolkit";
import TempSlice from "./reducers/TempSlice";

export default configureStore({
    reducer: {
        tempSlice: TempSlice
    }
})