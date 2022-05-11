import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// http://localhost:8080/books
// ?q=${searchTerm}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/books' }),
  endpoints: builder => ({
    getBookDetails: builder.query({
      query: id => `/${id}`,
    }),
    getBooksBySearchTerm: builder.query({
      query: searchTerm => `?q=${searchTerm}`,
    }),
  }),
});
