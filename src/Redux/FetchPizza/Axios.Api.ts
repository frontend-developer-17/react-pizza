import axios from 'axios';
const instanse = axios.create({
  baseURL: `https://641dca320596099ce154a309.mockapi.io/react-pizza`,
});

export const pizzaApi = {
  fetchPizza(categori:string, order:string, sort:string, currentPage:number) {
    return instanse.get(
      `?category=${categori}&order=${order}&sortBy=${sort}&page=${currentPage}&limit=4`,
    );
  },
};

export type FetchPizzaData = {
  categori: string,
  order: string,
  sort: string,
  currentPage: string,
};
