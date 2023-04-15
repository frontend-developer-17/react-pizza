import { PayloadAction,  createSlice } from '@reduxjs/toolkit';
import { PizzaData } from '../../@types/types';
import { fetchPizza } from '../AsynsAction/FetchPizzaThunk';









interface Pizza{
  items:PizzaData[],
  status: 'loading'|'sucess'|'error'
}


const initialState:Pizza = {
  items: [],
  status: 'loading',
};

export const pizzaSlice = createSlice({
  name: 'PizzaSlice',
  initialState,
  reducers: {},
  extraReducers: 
    (builder) => {
      builder.addCase(fetchPizza.pending, (state ) => {
        state.status = 'loading';
      })
   
   builder.addCase(fetchPizza.fulfilled, (state, action:PayloadAction<PizzaData[]>) => {
         state.status = 'sucess';

       state.items = action.payload;
      })
    builder.addCase(fetchPizza.rejected, (state) => {
        state.status = 'loading';
      })
   
    }

    
  },
);

export default pizzaSlice.reducer;
