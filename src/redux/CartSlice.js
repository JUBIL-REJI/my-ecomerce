import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

  name:'cart',
  initialState:{
    cart:[],
    qty:0,
  },


  reducers : {

  addToCart:(state,actions)=>{
    const itemInCart = state.cart.findIndex((item)=>item.id===actions.payload.id)
    if(itemInCart !== -1){
      state.cart[itemInCart].qty++
    }
    else{
      state.cart.push({
        ...actions.payload,
       qty:1
       
      }
      )
    }

  },

  deleteFromCart: (state, actions) => {
    const itemInCart = state.cart.findIndex(item => item.id === actions.payload.id);
  
    if (itemInCart !== -1) {
      if (state.cart[itemInCart].qty > 1) {
        state.cart[itemInCart].qty -= 1;
      } else {
        state.cart.splice(itemInCart, 1); 
      }
  
      if (state.qty > 0) {
        state.qty--;
      }
    }
  }
  
 




  }


})

export const{addToCart,deleteFromCart}=cartSlice.actions;
export default cartSlice.reducer