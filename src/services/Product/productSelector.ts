import { RootState } from "../store";

export const productSelectors = {
  listProductState: (state: RootState) => state.persistedReducer.product.listProductState,
};