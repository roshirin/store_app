import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showDeleteOrderModal } from '../../store/reducers/deleteOrderModalSlice';
import { PreparedOrder } from '../../types';
import './styles/OrdersItem.scss';

type Props = {
  order: PreparedOrder;
  handleOrderPick: (id: number) => void;
  openedOrderId: null | number;
};

export const OrdersItem: FC<Props> = ({
  order,
  handleOrderPick,
  openedOrderId,
}) => {
  const { id, title, orderProducts, orderTotal, preparedDates } = order;

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const productsQuantityLabel =
    orderProducts.length === 1
      ? t('order.prodQuantity1')
      : orderProducts.length <= 4
      ? t('order.prodQuantity2')
      : t('order.prodQuantity3');

  const handleDelete = () => {
    dispatch(showDeleteOrderModal(id));
  };

  return (
    <Card className="flex-row align-items-center h-4 my-3 py-2 order">
      {!openedOrderId && (
        <div className="order__title" onClick={() => handleOrderPick(id)}>
          <div className="order-title">{title}</div>
        </div>
      )}

      <div
        className="order__products-quantity"
        onClick={() => handleOrderPick(id)}
      >
        <div className="list-icon">
          <i className="fa-solid fa-list"></i>
        </div>
        <div>
          <div className="order-products-quant">{orderProducts.length}</div>
          <div className="order-products-quant__label">
            {productsQuantityLabel}
          </div>
        </div>
      </div>

      <div className="order__date">
        <div className="date-short">{preparedDates[0]}</div>
        <div className="date-full">{preparedDates[1]}</div>
      </div>

      {!openedOrderId && (
        <>
          <div className="order__total">
            <div className="secondary-price">{orderTotal[0]} USD</div>
            <div>{orderTotal[1]} UAH</div>
          </div>

          <div className="order__delete">
            <button className="delete-card-button" onClick={handleDelete}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </>
      )}

      {openedOrderId === id && (
        <div
          className="order__product-arrow"
          onClick={() => handleOrderPick(id)}
        ></div>
      )}
    </Card>
  );
};
