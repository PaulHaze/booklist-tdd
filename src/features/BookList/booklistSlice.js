import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// http://localhost:8080/books

// import { books } from 'data/books';

const getBooks = async () => {
  const response = await axios.get('http://localhost:8080/books');
  return response.data;
};

export const getBooksThunk = createAsyncThunk(
  'booklist/getBooksThunk',
  async () => getBooks(),
);

const initialState = {
  isLoading: false,
  hasErrors: false,
  books: [],
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
  extraReducers: {
    [getBooksThunk.pending](state) {
      state.isLoading = true;
    },
    [getBooksThunk.fulfilled](state, action) {
      state.books = action.payload;
      state.isLoading = false;
      state.hasErrors = false;
    },
    [getBooksThunk.rejected](state) {
      state.isLoading = false;
      state.hasErrors = true;
    },
  },
});

export const { setSearchTerm } = booklistSlice.actions;

export default booklistSlice.reducer;
