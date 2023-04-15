import { createAsyncThunk } from "@reduxjs/toolkit";
import { pizzaApi } from "../FetchPizza/Axios.Api";
import { PizzaData } from "../../@types/types";

export type ParamsObj= {
    categori:string, order:string, sort:string, currentPage:number
  }
  
export const fetchPizza = createAsyncThunk<PizzaData[],ParamsObj>('pizzaSlice/fetchPizzaItems', async (params ) => {
    const { categori, order, sort, currentPage } = params;
   const response = await pizzaApi.fetchPizza(categori, order, sort, currentPage);
  return response.data as PizzaData[]  ;
  });