import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    serialNumber: '23.165',
    isNew: true,
    photo: 'monitor_23.6_HP.webp',
    title: '23.6" HP X24c (9FM22AA) Full HD Curved VA 1500R',
    type: 'monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017/06/29',
      end: '2025/06/29',
    },
    price: [
      { value: 148, symbol: 'USD', isDefault: 0 },
      { value: 5499, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [1, 2],
    date: '2017/06/29',
  },
  {
    id: 2,
    serialNumber: '18.189',
    isNew: false,
    photo: 'laptop_ASUS_F15.webp',
    title: 'ASUS TUF Dash F15 FX517ZC-HN098 Black / 15.6"',
    type: 'laptops',
    specification: 'Specification 2',
    guarantee: {
      start: '2018/03/03',
      end: '2026/03/03',
    },
    price: [
      { value: 1052, symbol: 'USD', isDefault: 0 },
      { value: 39999, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [],
    date: '2018/03/03',
  },
  {
    id: 3,
    serialNumber: '23.199',
    isNew: false,
    photo: 'monitor_23.8_Acer.webp',
    title: '23.8" Acer Nitro Gaming Monitor KG242YEbmiix',
    type: 'monitors',
    specification: 'Specification 2',
    guarantee: {
      start: '2018/03/13',
      end: '2026/03/13',
    },
    price: [
      { value: 134, symbol: 'USD', isDefault: 0 },
      { value: 5099, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [2, 4],
    date: '2018/03/13',
  },
  {
    id: 4,
    serialNumber: '23.201',
    isNew: false,
    photo: 'monitor_27_Iiyama.webp',
    title: '27" Iiyama G-Master G2770HSU-B1',
    type: 'monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2019/02/01',
      end: '2027/02/01',
    },
    price: [
      { value: 215, symbol: 'USD', isDefault: 0 },
      { value: 8199, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [4],
    date: '2019/02/01',
  },
  {
    id: 5,
    serialNumber: '23.121',
    isNew: true,
    photo: 'monitor_27_Samsung.webp',
    title: '27" Samsung S27A600 (LS27A600NWIXCI / LS27A600NAIXCI) IPS 2K',
    type: 'monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017/01/19',
      end: '2025/01/19',
    },
    price: [
      { value: 279, symbol: 'USD', isDefault: 0 },
      { value: 10599, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [3],
    date: '2017/01/19',
  },
  {
    id: 6,
    serialNumber: '18.524',
    isNew: true,
    photo: 'laptop_Lenovo_15IAU7.webp',
    title: 'Lenovo IdeaPad 1 15IAU7 Cloud Grey / 15.6"',
    type: 'laptops',
    specification: 'Specification 1',
    guarantee: {
      start: '2018/06/05',
      end: '2026/06/05',
    },
    price: [
      { value: 460, symbol: 'USD', isDefault: 0 },
      { value: 17499, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [2],
    date: '2018/06/05',
  },
  {
    id: 7,
    serialNumber: '09.062',
    isNew: true,
    photo: 'printer_Canon_MF267.webp',
    title: 'Canon i-SENSYS MF267dw II, ethernet, fax',
    type: 'printers',
    specification: 'Specification 1',
    guarantee: {
      start: '2019/12/05',
      end: '2027/12/05',
    },
    price: [
      { value: 456, symbol: 'USD', isDefault: 0 },
      { value: 17339, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [],
    date: '2019/12/05',
  },
  {
    id: 8,
    serialNumber: '09.120',
    isNew: true,
    photo: 'printer_HP_4103dw.webp',
    title: 'HP LaserJet Pro 4103dw, Wi-Fi, Ethernet, ADF',
    type: 'printers',
    specification: 'Specification 2',
    guarantee: {
      start: '2017/10/07',
      end: '2025/10/07',
    },
    price: [
      { value: 456, symbol: 'USD', isDefault: 0 },
      { value: 17339, symbol: 'UAH', isDefault: 1 },
    ],
    orders: [2],
    date: '2017/10/07',
  },
];

export const fetchProducts = async () => {
  try {
    // API call
    // const response = await fetch('API_endpoint');
    // const products = await response.json();

    return products;
  } catch {
    throw new Error('An error fetching the products');
  }
};
