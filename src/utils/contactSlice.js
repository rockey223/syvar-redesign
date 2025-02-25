import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayButton : false
}
export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers:{
        show: (state)=>{
            state.displayButton = true
        },
        hide: (state)=>{
            
            state.displayButton = false
        }
    }
})

export const {show,hide} = contactSlice.actions
export default contactSlice.reducer