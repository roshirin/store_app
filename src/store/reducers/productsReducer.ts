import {
  Product,
  PreparedProduct,
  ProductsActionTypes,
  PRODUCTS_LOADED,
  PRODUCTS_PREPARED,
} from '../../types';

interface ProductsState {
  products: Product[];
  preparedProducts: PreparedProduct[];
  sortOption: string;
  filterOption: string;
}

const initialState: ProductsState = {
  products: [],
  preparedProducts: [],
  sortOption: '',
  filterOption: '',
};

const productsReducer = (
  state = initialState,
  action: ProductsActionTypes,
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return { ...state, products: action.payload };

    case PRODUCTS_PREPARED:
      return { ...state, preparedProducts: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
