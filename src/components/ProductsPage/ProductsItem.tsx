import { FC } from 'react';
import { Card } from 'react-bootstrap';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showDeleteProductModal } from '../../store/reducers/deleteProductModalSlice';
import { PreparedProduct } from '../../types';
import './styles/ProductsItem.scss';

type Props = {
  product: PreparedProduct;
};

export const ProductsItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const {
    id,
    serialNumber,
    isNew,
    photo,
    title,
    specification,
    guarantee: { start, end },
    orders,
    preparedDates,
  } = product;

  const imageSrc = `src/images/produsts/${photo}`;

  const primePrice = product.price.find((price) => price.isDefault === 1)!;
  const secondaryPrice = product.price.find((price) => price.isDefault === 0)!;
  const { value: primePriceValue, symbol: primePriceSymbol } = primePrice;
  const { value: secondaryPriceValue, symbol: secondaryPriceSymbol } =
    secondaryPrice;

  const handleDelete = () => {
    dispatch(showDeleteProductModal(id));
  };

  return (
    <Card className="flex-row align-items-center h-4 my-3 py-2 product">
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

      <div className="product__guaranty prod-guaranty">
        <div className="prod-guaranty__labels">
          <div>{t('product.guar_from')}:</div>
          <div>{t('product.guar_to')}:</div>
        </div>
        <div className="prod-guaranty__dates">
          <div>{start}</div>
          <div>{end}</div>
        </div>
      </div>

      <div className="product__is-new">
        {isNew ? <>{t('product.isNew_1')}</> : <>{t('product.isNew_2')}</>}
      </div>

      <div className="product__price">
        <div className="secondary-price">
          {secondaryPriceValue} {secondaryPriceSymbol}
        </div>
        <div className="prime-price">
          {primePriceValue} {primePriceSymbol}
        </div>
      </div>

      <div className="product__in-orders">
        {orders.length > 0 ? (
          <>
            <div>{t('product.orders')}:</div>
            <div>{orders.join(', ')}</div>
          </>
        ) : (
          <>-</>
        )}
      </div>

      <div className="product__date">
        <div className="order-date-short">{preparedDates[0]}</div>
        <div className="order-date-full">{preparedDates[1]}</div>
      </div>

      <div className="product__delete">
        <button className="delete-card-button" onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </Card>
  );
};
