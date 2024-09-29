import { createSlice } from "@reduxjs/toolkit";
const cartSlice =createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add_to_cart:(state,action)=>{
            console.log(action.payload);
            
             state.push(action.payload.item)

        },
        remove_from_cart:(state,action)=>{
             state.reduce(state.id!==action.payload.id)
        }
    }
})
export default cartSlice.reducer
export const {add_to_cart,remove_from_cart}=cartSlice.actions