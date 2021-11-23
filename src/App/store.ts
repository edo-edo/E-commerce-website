import { configureStore } from '@reduxjs/toolkit';

import ProductsReducer from './Products/productsSlice';

const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
