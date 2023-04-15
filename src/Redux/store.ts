import { configureStore } from '@reduxjs/toolkit';
import categoriSlice from './Slise/CategoriSlise';
import sortSlice from './Slise/SortSlise';
import basketSlise from './Slise/BasketSlise';
import pizzaSlice from './Slise/PizzaSlise';
import { fetchPizzaId } from './FetchPizza/GetPizzaIdQuery';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    categoriSlice,
    sortSlice,
    basketSlise,
    pizzaSlice,
    [fetchPizzaId.reducerPath]: fetchPizzaId.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchPizzaId.middleware),
});
export type RootState = ReturnType<typeof store.getState>;


 type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch