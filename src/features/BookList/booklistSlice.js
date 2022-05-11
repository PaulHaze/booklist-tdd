import { createSlice } from '@reduxjs/toolkit';

import { books } from 'data/books';

const initialState = {
  books,
  searchTerm: '',
};

const booklistSlice = createSlice({
  name: 'booklistSlice',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = booklistSlice.actions;

export default booklistSlice.reducer;
