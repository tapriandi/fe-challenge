import {Product} from '../Product/types';

export interface CartItem {
  product: Product;
  qty: number;
}
export interface CartState {
  items: CartItem[];
}
