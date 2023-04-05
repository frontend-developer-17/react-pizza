import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setCurrentSort(state, action) {
      state.activeSort = action.payload;
    },
    urlSort: (state, action) => {
      state.activeSort = action.payload.sorting;
    },
  },
});

export const { setCurrentSort, urlSort } = sortSlice.actions;

export default sortSlice.reducer;
