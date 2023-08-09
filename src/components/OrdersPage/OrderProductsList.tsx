import { FC } from 'react';
import { OrderProductsItem } from './OrderProductsItem';
import { PreparedProduct } from '../../types';
import './styles/OrderProductsList.scss';

type Props = {
  products: PreparedProduct[];
  orderTitle: string;
};

export const OrderProductsList: FC<Props> = ({ products, orderTitle }) => {
  return (
    <div className="order-products">
      <h2 className="order-products__title">{orderTitle}</h2>

      {products.map((product) => (
        <OrderProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};
