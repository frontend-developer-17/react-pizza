import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categori: 0,
  categoriesName: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
};

export const categoriSlice = createSlice({
  name: 'CategoriSlice',
  initialState,
  reducers: {
    setCategori: (state, action) => {
      state.categori = action.payload;
    },
    urlCategori: (state, action) => {
      state.categori = Number(action.payload.activeCategor);
    },
  },
});

export const { setCategori, urlCategori } = categoriSlice.actions;

export default categoriSlice.reducer;
