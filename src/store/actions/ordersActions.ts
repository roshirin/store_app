import {
  ORDERS_LOADED,
  ORDERS_PREPARED,
  Order,
  PreparedOrder,
  OrdersActionTypes,
} from '../../types';

export const storeOrders = (orders: Order[]): OrdersActionTypes => ({
  type: ORDERS_LOADED,
  payload: orders,
});

export const prepareOrders = (
  preparedOrders: PreparedOrder[],
): OrdersActionTypes => ({
  type: ORDERS_PREPARED,
  payload: preparedOrders,
});
