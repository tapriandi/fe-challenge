import {createSlice} from '@reduxjs/toolkit';
import {ProductInitials} from './types';

export const initialState: ProductInitials = {
  listProductState: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setListProductState: (state, action) => {
      state.listProductState = action.payload;
    },
  },
});

export const {setListProductState} = productSlice.actions;

export default productSlice.reducer;
