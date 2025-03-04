import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartState} from './types';
import {Product} from '../Product/types';

export const initialState: CartState = {
  items: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        item => item.product.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        const newitem = {product: action.payload, qty: 1};
        state.items.push(newitem);
      }
    },
    decreaseCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        item => item.product.id === action.payload,
      );
      if (index !== -1) {
        if (state.items[index].qty > 1) {
          state.items[index].qty -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload,
      );
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const {addToCart, decreaseCart,removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
