import {fetchBaseQuery} from '@reduxjs/toolkit/query';
import {BASE_URL} from './urls';

const baseQueryRefreshToken = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export {baseQueryRefreshToken};
