import { createSelector } from 'reselect';
import { RootState } from './store';

const getProductsState = (state: RootState) => state.products;
const getPreparedProductsState = (state: RootState) => state.preparedProducts;
const getPreparedOrdersState = (state: RootState) => state.preparedOrders;

export const selectProducts = createSelector(
  [getProductsState],
  (productsState) => productsState.products,
);

export const selectPreparedProducts = createSelector(
  [getPreparedProductsState],
  (preparedProductsState) => preparedProductsState.preparedProducts,
);

export const selectPreparedOrders = createSelector(
  [getPreparedOrdersState],
  (preparedOrdersState) => preparedOrdersState.preparedOrders,
);
