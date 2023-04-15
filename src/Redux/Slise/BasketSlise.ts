import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getItemfromLS } from '../../utils/getItemfromLS';

import { ItemsPizza } from '../../@types/types';


interface Basket{
  totalPrise:number,
  items:  ItemsPizza[]
 
}

const {items,totalPrise} = getItemfromLS()
const initialState:Basket = {
  totalPrise:totalPrise,
 
  items: items,
};

export const basketSlise = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addItems(state, action:PayloadAction<ItemsPizza>) {
   
      const findId = state.items.find((item) => item.id === action.payload.id);
      if (findId) {
        debugger
        findId.count++;
     
        findId.itemPrise = findId.prise*findId.count 
      } else {
        state.items.push({ ...action.payload,count:1,itemPrise:action.payload.prise});
      }
      state.totalPrise = state.items.reduce((sum, obj) => {
       
        return (Number(obj.prise) * obj.count + sum);
      }, 0);
    },
    removePizza(state, action:PayloadAction<ItemsPizza>) {
      
      const findId = state.items.find((item) => item.id === action.payload.id);
      if (findId) {
      
        state.totalPrise = state.totalPrise - Number(findId.prise) * findId.count;
      }
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
    minusPizza(state, action:PayloadAction<ItemsPizza>) {
      const findPizza = state.items.find((obj) => obj.id === action.payload.id);
      if (findPizza) {
        findPizza.count--;
       
        findPizza.itemPrise= findPizza.itemPrise-findPizza.prise
        state.totalPrise = state.totalPrise - Number(findPizza.prise) ;

      }
    //  if (findPizza?.count === 0) {
      //  state.items = state.items.filter((obj) => obj.id !== action.payload.id);
     // }
    },
    deleteBasket(state) {
      state.items = [];
      state.totalPrise = 0;
    },
  },
});
//export const Bask= (id:number) = (state:RootState) => state.basketSlise.items.find((obj) => obj.id === id)
export const { addItems, removePizza, minusPizza, deleteBasket } = basketSlise.actions;

export default basketSlise.reducer;
