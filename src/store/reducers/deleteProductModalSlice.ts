import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface deleteProductModalState {
  isVisible: boolean;
  productId?: number;
}

const initialState: deleteProductModalState = {
  isVisible: false,
  productId: undefined,
};

const deleteProductModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showDeleteProductModal(state, action: PayloadAction<number>) {
      state.isVisible = true;
      state.productId = action.payload;
    },

    hideDeleteProductModal(state) {
      state.isVisible = false;
      state.productId = undefined;
    },
  },
});

export const { showDeleteProductModal, hideDeleteProductModal } =
  deleteProductModalSlice.actions;
export default deleteProductModalSlice.reducer;
