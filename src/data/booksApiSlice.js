import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/books' }),
  endpoints: builder => ({
    getAllBooks: builder.query({
      query: base => base,
    }),
    getBookDetails: builder.query({
      query: id => `/${id}`,
    }),
    getBooksBySearchTerm: builder.query({
      query: searchTerm => `?q=${searchTerm}`,
    }),
  }),
});

export const { useGetAllBooks, useGetBookDetails, useGetBooksBySearchTerm } =
  booksApi;
