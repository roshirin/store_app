import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';

export const store = configureStore({
  reducer: combinedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
