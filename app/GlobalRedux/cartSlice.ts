"use client";
import { createSlice } from '@reduxjs/toolkit';

interface Product{
  price:number,
  color:string
}
interface CartState {
    products:Product[],
    quantity:number,
    total:number
}

const initialState: CartState = {
        products:[],
        quantity:0,
        total:0,
    }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state:any, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
   
   
  },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;