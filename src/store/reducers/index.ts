import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';
import filterReducer from './filterSlice';
import deleteProductModalSlice from './deleteProductModalSlice';
import deleteOrderModalSlice from './deleteOrderModalSlice';

const combinedReducer = combineReducers({
  products: productsReducer,
  preparedProducts: productsReducer,
  orders: ordersReducer,
  preparedOrders: ordersReducer,
  filter: filterReducer,
  deleteProductModal: deleteProductModalSlice,
  deleteOrderModal: deleteOrderModalSlice,
});

export default combinedReducer;
