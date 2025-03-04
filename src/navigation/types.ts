import { Product } from '../services/Product/types';
import RouteName from './RouteName';

export type RootStackParams = {
  [RouteName.Cart]: undefined;
  [RouteName.Product]: undefined;
  [RouteName.ProductDetail]: {product: Product};
};
