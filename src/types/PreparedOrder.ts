import { Product } from '.';

export interface PreparedOrder {
  id: number;
  title: string;
  productNumbers: number[];
  orderProducts: Product[];
  orderTotal: number[];
  preparedDates: string[];
}
