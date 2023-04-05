import { configureStore } from '@reduxjs/toolkit';
import categoriSlice from './CategoriSlise';
import sortSlice from './SortSlise';
import basketSlise from './BasketSlise';

export const store = configureStore({
  reducer: {
    categoriSlice,
    sortSlice,
    basketSlise,
  },
});
