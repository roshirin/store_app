import { Order } from '../types';

const orders: Order[] = [
  {
    id: 1,
    title: 'Long-long overhelming order name',
    date: '2023-06-29 18:11:00',
    description: 'desc',
    products: [1],
  },
  {
    id: 2,
    title: 'Long-long all-conquering order name',
    date: '2023-06-30 09:09:25',
    description: 'desc',
    products: [1, 3, 6, 8],
  },
  {
    id: 3,
    title: 'Long-long overthrowing order name',
    date: '2023-07-14 12:11:33',
    description: 'desc',
    products: [5],
  },
  {
    id: 4,
    title: 'Long-long endearing and discouraging order name',
    date: '2023-07-14 13:09:33',
    description: 'desc',
    products: [3, 4],
  },
];

export const fetchOrders = async () => {
  try {
    // API call
    // const response = await fetch('API_endpoint');
    // const orders = await response.json();

    return orders;
  } catch {
    throw new Error('An error fetching the orders');
  }
};
