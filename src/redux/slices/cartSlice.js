import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addCart:(state,action)=>{
            state.push(action.payload)
        },
        removeCart:(state,action)=>{
            return state.filter((item)=>item.id != action.payload)
        },
        emptyCart:(state)=>{
            // eslint-disable-next-line no-unused-vars
            return state=[]
        }
    }
})
export const {addCart,removeCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer