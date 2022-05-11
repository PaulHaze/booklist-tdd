import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { booksApi } from 'data/booksApiSlice';

import booklistSlice from 'features/BookList/booklistSlice';
// import rootReducer from './reducers';

export const store = configureStore({
  reducer: {
    booklist: booklistSlice,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);
