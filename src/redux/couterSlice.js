import { createSlice } from "@reduxjs/toolkit";

const couterSlice =createSlice({
  name:'couter',
  initialState:{
    value:6
  },
  reducers:{
    handlePlus:(state)=>{
       state.value+=1
    }
  }
})  


 export const {handlePlus}=couterSlice.actions;

 export default couterSlice.reducer;
