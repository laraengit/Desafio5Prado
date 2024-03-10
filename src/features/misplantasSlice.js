import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid'

const initialStateplantas = {
    items:[]
}

export const misplantasSlice = createSlice({
    name: "misplantas",
    initialState: initialStateplantas,
    reducers:{
        agregarPlanta:(state,actions)=>{
            state.items = [...state.items, {...actions.payload}]
        }
    }
})

export const {agregarPlanta} = misplantasSlice.actions

export default misplantasSlice.reducer