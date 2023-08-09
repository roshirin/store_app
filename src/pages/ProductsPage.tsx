import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectPreparedProducts } from '../store/selectors';
import { FilterAndSortBar, ProductsList } from '../components/ProductsPage';

export const ProductsPage = () => {
  const preparedProducts = useSelector(selectPreparedProducts);

  const { t } = useTranslation();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">
          {t('productsTitle')} / {preparedProducts.length}
        </h1>

        <FilterAndSortBar />
      </div>

      <ProductsList />
    </>
  );
};
