import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductInitials} from './types';
import {productApi} from './productApi';

export const initialState: ProductInitials = {
  listProductState: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setListProductState: (state, action: PayloadAction<Product[]>) => {
      state.listProductState = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, {payload}) => {
        state.listProductState = payload;
      },
    );
  },
});

export const {setListProductState} = productSlice.actions;

export default productSlice.reducer;
