import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  selectFilterOption,
  selectQuery,
  selectSortOption,
} from '../../store/reducers/filterSlice';
import { selectPreparedProducts } from '../../store/selectors';
import { ProductsItem } from './ProductsItem';
import { PreparedProduct } from '../../types';
import { filterAndSortProducts } from '../../utils';

export const ProductsList = () => {
  const preparedProducts = useSelector(selectPreparedProducts);
  const filterOption = useSelector(selectFilterOption);
  const sortOption = useSelector(selectSortOption);
  const query = useSelector(selectQuery);
  const { t } = useTranslation();

  const productsToRender = filterAndSortProducts(
    preparedProducts,
    filterOption,
    sortOption,
    query,
  );

  return (
    <div className="product-list">
      {productsToRender.length > 0 ? (
        <>
          {productsToRender.map((product: PreparedProduct) => (
            <ProductsItem key={product.id} product={product} />
          ))}
        </>
      ) : (
        <>{t('noProducts')}</>
      )}
    </div>
  );
};
