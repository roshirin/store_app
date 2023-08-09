import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterState {
  filterOption: string;
  sortOption: string;
  query: string;
}

const initialState: FilterState = {
  filterOption: 'all',
  sortOption: 'none',
  query: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<string>) => {
      state.filterOption = action.payload;
    },
    updateSort: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { updateFilter, updateSort, updateQuery } = filterSlice.actions;
export const selectFilterOption = (state: RootState) =>
  state.filter.filterOption;
export const selectSortOption = (state: RootState) => state.filter.sortOption;
export const selectQuery = (state: RootState) => state.filter.query;
export default filterSlice.reducer;
