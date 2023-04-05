import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrise: 0,
  items: [],
};

export const basketSlise = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addItems(state, action) {
      state.items.push(action.payload);
      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.prise + sum;
      }, 0);
    },
  },
});

export const { addItems } = basketSlise.actions;

export default basketSlise.reducer;
