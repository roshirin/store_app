import { fetchOrders, fetchProducts } from '../api';
import {
  Order,
  PreparedProduct,
  Product,
  FilterOptions,
  SortOptions,
} from '../types';

export const getPreparedProducts = async () => {
  try {
    const products = await fetchProducts();
    const preparedProducts = products.map((product) => {
      const preparedDates = prepareDates(product.date);

      return { ...product, preparedDates };
    });
    return preparedProducts;
  } catch {
    throw new Error('An error preparing the products');
  }
};

const getOrderProducts = (prodIds: number[], products: Product[]) => {
  const foundProducts: Product[] = [];

  prodIds.forEach((id) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      foundProducts.push(product);
    }
  });

  return foundProducts;
};

const getOrderTotal = (products: Product[]) => {
  const total = [0, 0];

  products.forEach((product) => {
    total[0] += product.price[0].value;
    total[1] += product.price[1].value;
  });

  return total;
};

const prepareDates = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();

  const month = date.getMonth();
  const monthNumber = month >= 9 ? month + 1 : '0' + (month + 1);

  const day = date.getDay();
  const dayNumber = day >= 9 ? day + 1 : '0' + (day + 1);

  const shortDate = `${monthNumber} / ${year}`;
  const fullDate = `${dayNumber} / ${monthNumber} / ${year}`;

  return [shortDate, fullDate];
};

const prepareOrders = (orders: Order[], products: Product[]) => {
  const preparedOrders = orders.map((order) => {
    const { id, title, products: productNumbers } = order;

    const orderProducts = getOrderProducts(productNumbers, products);
    const orderTotal = getOrderTotal(orderProducts);
    const preparedDates = prepareDates(order.date);

    return {
      id,
      title,
      productNumbers,
      orderProducts,
      orderTotal,
      preparedDates,
    };
  });

  return preparedOrders;
};

export const getPreparedOrders = async (products: Product[]) => {
  try {
    const orders = await fetchOrders();

    return prepareOrders(orders, products);
  } catch {
    throw new Error('An error preparing the orders');
  }
};

export const filterAndSortProducts = (
  products: PreparedProduct[],
  filterOption: string,
  sortOption: string,
  query: string,
) => {
  const filteredByType =
    filterOption === FilterOptions.ALL
      ? [...products]
      : products.filter((product) => {
          return product.type === filterOption;
        });

  const filteredByQuery = filteredByType.filter((product) =>
    product.title.includes(query),
  );

  const filteredAndSorted = filteredByQuery.sort((product1, product2) => {
    switch (sortOption) {
      case SortOptions.DATE:
        const date1 = new Date(product1.date).getTime();
        const date2 = new Date(product2.date).getTime();

        return date1 - date2 < 0 ? -1 : 1;

      case SortOptions.TITLE:
        return product1.title.localeCompare(product2.title);

      case SortOptions.GUARANTY:
        const guaranty1 = new Date(product1.guarantee.start).getTime();
        const guaranty2 = new Date(product2.guarantee.start).getTime();

        return guaranty1 - guaranty2 < 0 ? -1 : 1;

      case SortOptions.IS_NEW:
        const isNew1 = Number(product1.isNew);
        const isNew2 = Number(product2.isNew);

        return isNew2 - isNew1;

      case SortOptions.STATUS:
        return product1.specification.localeCompare(product2.specification);

      default:
        return 0;
    }
  });

  return filteredAndSorted;
};
