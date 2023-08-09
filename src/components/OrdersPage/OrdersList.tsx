import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import {
  selectPreparedOrders,
  selectPreparedProducts,
} from '../../store/selectors';
import { OrdersItem } from './OrdersItem';
import { OrderProductsList } from './OrderProductsList';
import { PreparedOrder, PreparedProduct } from '../../types';
import './styles/OrdersList.scss';

export const OrdersList = () => {
  const [openedOrderId, setOpenedOrderId] = useState<null | number>(null);
  const [openedOrderTitle, setOpenedOrderTitle] = useState<string>('');
  const [orderProducts, setOrderProducts] = useState<null | PreparedProduct[]>(
    null,
  );

  const preparedProduct = useSelector(selectPreparedProducts);
  const preparedOrders = useSelector(selectPreparedOrders);

  const handleOrderPick = useCallback(
    (id: number) => {
      if (openedOrderId === id) {
        setOpenedOrderId(null);

        return;
      }

      setOpenedOrderId(id);
    },
    [openedOrderId],
  );

  useEffect(() => {
    if (openedOrderId) {
      const order = preparedOrders.find((order) => order.id === openedOrderId)!;
      const products = preparedProduct.filter((product) =>
        order.productNumbers.includes(product.id),
      );

      setOpenedOrderTitle(order.title);
      setOrderProducts(products);

      return;
    }

    setOrderProducts(null);
  }, [openedOrderId]);

  return (
    <div className="orders-page-content">
      <div className="orders-list">
        {preparedOrders.map((order: PreparedOrder) => (
          <OrdersItem
            key={order.id}
            order={order}
            handleOrderPick={handleOrderPick}
            openedOrderId={openedOrderId}
          />
        ))}
      </div>

      <div
        className={cn('order-products-container', {
          open: openedOrderId,
        })}
      >
        {orderProducts && (
          <OrderProductsList
            products={orderProducts}
            orderTitle={openedOrderTitle}
          />
        )}
      </div>
    </div>
  );
};
