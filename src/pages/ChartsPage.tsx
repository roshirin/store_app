import { useTranslation } from 'react-i18next';
import { ProductCharts } from '../components/ChartsPage/ProductCharts';

export const ChartsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{t('chartsTitle')}</h1>
      </div>

      <ProductCharts />
    </>
  );
};
