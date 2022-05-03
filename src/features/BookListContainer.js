import { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '@mantine/core';

import { BookList } from 'components';

import { books } from 'data/books';

import { useRemoteService } from 'hooks/useRemoteService';

export function BookListContainer() {
  const { data, loading, hasErrors, reloadData, deleteData } = useRemoteService(
    [],
  );
  const handleReload = () => reloadData();

  const handleDelete = () => deleteData();

  // const handleClear = () => {
  //   setLocalBooks([]);
  // };

  // const handleFetch = () => {
  //   fetchBooks();
  // };
  if (loading) {
    return <h1>loading</h1>;
  }
  if (hasErrors) {
    return <h1>errors</h1>;
  }
  return (
    <section>
      <BookList books={data} />
      <div className="mt-2 flex flex-col space-y-3">
        <Button
          onClick={handleReload}
          className="bg-teal-500 w-40"
          color="teal"
          variant="filled"
        >
          Reload Books
        </Button>
        {/* <Button
          onClick={handleFetch}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Fetch Books
        </Button> */}
        {/* <Button
          onClick={handleClear}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Clear Books
        </Button> */}
        <Button
          onClick={handleDelete}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Delete API
        </Button>
      </div>
    </section>
  );
}
