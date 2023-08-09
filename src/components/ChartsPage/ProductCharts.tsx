import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { selectPreparedProducts } from '../../store/selectors';
import './ProductCharts.scss';
import { chartsOptions } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

type ProductTypes = {
  [key: string]: number;
};

export const ProductCharts = () => {
  const preparedProducts = useSelector(selectPreparedProducts);

  const { t } = useTranslation();

  const isNewQuantity = preparedProducts.reduce(
    (acc, prod) => acc + Number(prod.isNew),
    0,
  );
  const isUsedQuantity = preparedProducts.length - isNewQuantity;
  const dataIsNew = [isNewQuantity, isUsedQuantity];
  const labelsIsNew = ['New', 'Used'];

  const data1 = {
    labels: labelsIsNew,
    datasets: [
      {
        label: t('chartsIsNew'),
        data: dataIsNew,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const productTypes: ProductTypes = {
    monitors: 0,
    laptops: 0,
    printers: 0,
  };

  preparedProducts.forEach((product) => {
    if (product.type in productTypes) {
      productTypes[product.type as keyof ProductTypes]++;
    }
  });

  const data2 = {
    labels: Object.keys(productTypes),
    datasets: [
      {
        label: t('chartsTypes'),
        data: Object.values(productTypes),
        backgroundColor: 'rgba(128, 23, 35, 0.5)',
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-container">
        <Bar options={chartsOptions} data={data1} />
      </div>
      <div className="chart-container">
        <Bar options={chartsOptions} data={data2} />
      </div>
    </div>
  );
};
