import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-native-uuid'
const initialState = {
    nombre:"",
    especie:"",
    riego:"",
    cuidados:""

}

export const nuevaplantaSlice = createSlice({
    name: "nuevaplanta",
    initialState: initialState,
    reducers:{
        setPlanta:(state,actions)=>state=actions.payload,
    }
})
export const  {setPlanta} = misplantasSlice.actions

export default nuevaplantaSlice.reducer