import {
  ORDERS_LOADED,
  ORDERS_PREPARED,
  Order,
  PreparedOrder,
  OrdersActionTypes,
} from '../../types';

interface OrdersState {
  orders: Order[];
  preparedOrders: PreparedOrder[];
}

const initialState: OrdersState = {
  orders: [],
  preparedOrders: [],
};

const ordersReducer = (
  state = initialState,
  action: OrdersActionTypes,
): OrdersState => {
  switch (action.type) {
    case ORDERS_LOADED:
      return { ...state, orders: action.payload };
    case ORDERS_PREPARED:
      return { ...state, preparedOrders: action.payload };
    default:
      return state;
  }
};

export default ordersReducer;
