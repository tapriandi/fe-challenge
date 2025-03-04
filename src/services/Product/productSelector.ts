import { RootState } from "../store";

export const productSelectors = {
  listProductState: (state: RootState) => state.persisted.product.listProductState,
};