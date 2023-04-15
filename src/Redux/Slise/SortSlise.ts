import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ActiveSorting={
  name: string, sort: string
}

interface Sort{
  activeSort:ActiveSorting
  sort:ActiveSorting[]
}
const initialState:Sort = {
  activeSort: { name: 'популярности(↑)', sort: 'rating' },
  sort: [
    { name: 'популярности(↑)', sort: 'rating' },
    { name: 'популярности(↓)', sort: '-rating' },
    { name: 'цене(↑)', sort: 'price' },
    { name: 'цене(↓)', sort: '-price' },
    { name: 'алфавиту(↑)', sort: 'title' },
    { name: 'алфавиту(↓)', sort: '-title' },
   
  ],
};

export const sortSlice = createSlice({
  name: 'CategoriSlice',
  initialState,
  reducers: {
    setCurrentSort(state, action:PayloadAction<ActiveSorting>) {
      state.activeSort = action.payload;
    },
    urlSort: (state, action:PayloadAction<ActiveSorting>) => {
     
      state.activeSort = action.payload
    },
  },
});

export const { setCurrentSort, urlSort } = sortSlice.actions;

export default sortSlice.reducer;
