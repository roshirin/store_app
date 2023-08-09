import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showDeleteProductModal } from '../../store/reducers/deleteProductModalSlice';
import { PreparedProduct } from '../../types';
import '../ProductsPage/styles/ProductsItem.scss';
import './styles/OrderProductsItem.scss';

type Props = {
  product: PreparedProduct;
};

export const OrderProductsItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { id, title, serialNumber, photo, specification } = product;

  const imageSrc = `/images/produsts/${photo}`;

  const handleDelete = () => {
    dispatch(showDeleteProductModal(id));
  };

  return (
    <div className="order-product-card product">
      <div className="product__status-indicator">
        <i
          className={cn('fa-solid', 'fa-circle', {
            'font-green': specification === 'Specification 1',
            'font-grey': specification === 'Specification 2',
          })}
        ></i>
      </div>

      <div className="product__image-container">
        <img src={imageSrc} className="product__image" />
      </div>

      <div className="product__title">
        <div className="product-title">{title}</div>
        <div className="product-serial">{serialNumber}</div>
      </div>

      <div
        className={cn('product__status', {
          'font-green': specification === 'Specification 1',
          'font-grey': specification === 'Specification 2',
        })}
      >
        {specification === 'Specification 1' ? (
          <>{t('product.spec_1')}</>
        ) : (
          <>{t('product.spec_2')}</>
        )}
      </div>

      <div className="product__delete">
        <button className="delete-card-button" onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};
