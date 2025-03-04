import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {productSlice} from './Product/productSlice';
import {cartSlice} from './Cart/cartSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  product: productSlice.reducer,
  cart: cartSlice.reducer,
});

type RootReducer = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer<RootReducer>(
  persistConfig,
  rootReducer,
);

export default persistedReducer;
