import {
  PRODUCTS_LOADED,
  PRODUCTS_PREPARED,
  Product,
  PreparedProduct,
  ProductsActionTypes,
} from '../../types';

export const storeProducts = (products: Product[]): ProductsActionTypes => ({
  type: PRODUCTS_LOADED,
  payload: products,
});

export const prepareProducts = (
  preparedProducts: PreparedProduct[],
): ProductsActionTypes => ({
  type: PRODUCTS_PREPARED,
  payload: preparedProducts,
});
