import { Product, PreparedProduct } from '.';

export const PRODUCTS_LOADED = 'FETCH_PRODUCTS';
export const PRODUCTS_PREPARED = 'PREPARE_PRODUCTS';

interface storeProductsAction {
  type: typeof PRODUCTS_LOADED;
  payload: Product[];
}

interface prepareProductsAction {
  type: typeof PRODUCTS_PREPARED;
  payload: PreparedProduct[];
}

export type ProductsActionTypes = storeProductsAction | prepareProductsAction;
