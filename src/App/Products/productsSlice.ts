import { createSlice } from '@reduxjs/toolkit';

import { products } from '../data/productList.json';

import { ProductProps } from './Product';
import { RootState } from '../store';

interface productsState {
  isLoading: boolean;
  products: ProductProps[];
  error: string | null;
}

const initialState: productsState = {
  isLoading: false,
  products: [...products],
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState): productsState => state.products;

export default productsSlice.reducer;
