import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface Categori{
  categori:number
}

const initialState:Categori = {
  categori: 0,

};

export const categoriSlice = createSlice({
  name: 'CategoriSlice',
  initialState,
  reducers: {
    setCategori: (state, action:PayloadAction<number>) => {
      state.categori = action.payload;
    },
    urlCategori: (state, action:PayloadAction<number>) => {
      state.categori = Number(action.payload);
    },
  },
});

export const { setCategori, urlCategori } = categoriSlice.actions;

export default categoriSlice.reducer;
