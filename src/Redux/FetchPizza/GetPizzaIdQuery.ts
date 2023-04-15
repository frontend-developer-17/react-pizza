import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PizzaData } from '../../@types/types';

export const fetchPizzaId = createApi({
  reducerPath: 'fetchPizzaId',
  baseQuery: fetchBaseQuery({ baseUrl: `https://641dca320596099ce154a309.mockapi.io/react-pizza` }),

  endpoints: (builder) => ({
    getPizzaId: builder.query<PizzaData, number>({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetPizzaIdQuery } = fetchPizzaId;
