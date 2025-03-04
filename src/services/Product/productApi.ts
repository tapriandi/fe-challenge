import {API} from '../urls';
import {baseQueryRefreshToken} from '../baseQuery';
import {createApi} from '@reduxjs/toolkit/query/react';
import {Product} from './types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQueryRefreshToken,
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      keepUnusedDataFor: 60 * 60,
      query: params => ({
        url: API.PRODUCT.PRODUCTS,
        method: 'GET',
      }),
      transformResponse: (response: {products: Product[]}) => response.products,
    }),
  }),
});

export const {useGetProductsQuery} = productApi;
