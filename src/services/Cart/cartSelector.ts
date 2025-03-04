import {RootState} from '../store';

export const cartSelectors = {
  getCartCount: (state: RootState) =>
    state.persisted.cart.items.reduce((total, item) => total + item.qty, 0),
};
