import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import couterReducer from './couterSlice'

export  const store = configureStore({

  reducer:{
   cart: cartReducer,
   counter:couterReducer
  }
})