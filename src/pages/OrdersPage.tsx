import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPreparedProducts,
  selectPreparedOrders,
} from '../store/selectors';
import { prepareOrders } from '../store/actions/ordersActions';
import { OrdersList } from '../components/OrdersPage';
import { getPreparedOrders } from '../utils';

export const Orders = () => {
  const preparedProducts = useSelector(selectPreparedProducts);
  const preparedOrders = useSelector(selectPreparedOrders);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const fetchAndPrepareOrders = useCallback(async () => {
    const preparedOrders = await getPreparedOrders(preparedProducts);
    dispatch(prepareOrders(preparedOrders));
  }, [preparedProducts]);

  useEffect(() => {
    fetchAndPrepareOrders();
  }, [preparedProducts]);

  return (
    <>
      <h1 className="orders-title">
        {t('ordersTitle')} / {preparedOrders.length}
      </h1>

      <OrdersList />
    </>
  );
};
