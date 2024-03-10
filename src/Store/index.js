import { configureStore } from "@reduxjs/toolkit";
import misPlantasReducer from "../features/misplantasSlice.js"
import nuevaplantaReducer from "../features/nuevaPlantaSlice.js"

export const store = configureStore({
    reducer: {
        misplantas: misPlantasReducer,
        nuevaplanta: nuevaplantaReducer

    }
})