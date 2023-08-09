import { Order, PreparedOrder } from '.';

export const ORDERS_LOADED = 'FETCH_ORDERS';
export const ORDERS_PREPARED = 'PREPARE_ORDERS';

interface storeOrdersAction {
  type: typeof ORDERS_LOADED;
  payload: Order[];
}

interface prepareOrdersAction {
  type: typeof ORDERS_PREPARED;
  payload: PreparedOrder[];
}

export type OrdersActionTypes = storeOrdersAction | prepareOrdersAction;
