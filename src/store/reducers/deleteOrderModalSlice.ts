import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface deleteOrderModalState {
  isVisible: boolean;
  orderId?: number;
}

const initialState: deleteOrderModalState = {
  isVisible: false,
  orderId: undefined,
};

const deleteOrderModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showDeleteOrderModal(state, action: PayloadAction<number>) {
      state.isVisible = true;
      state.orderId = action.payload;
    },

    hideDeleteOrderModal(state) {
      state.isVisible = false;
      state.orderId = undefined;
    },
  },
});

export const { showDeleteOrderModal, hideDeleteOrderModal } =
  deleteOrderModalSlice.actions;
export default deleteOrderModalSlice.reducer;
