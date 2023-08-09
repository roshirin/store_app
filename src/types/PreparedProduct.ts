export interface PreparedProduct {
  id: number;
  serialNumber: string;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: 'Specification 1' | 'Specification 2';
  guarantee: {
    start: string;
    end: string;
  };
  price: {
    value: number;
    symbol: string;
    isDefault: number;
  }[];
  orders: number[];
  preparedDates: string[];
  date: string;
}
