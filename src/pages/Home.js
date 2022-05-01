import { useEffect, useState } from 'react';

import { Button } from '@mantine/core';

import axios from 'axios';

import { BookList } from 'components';

import { books } from 'data/books';

export function Home() {
  const [localBooks, setLocalBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/books');
    setLocalBooks(res.data);
  };

  useEffect(() => {
    if (!localBooks.length) {
      console.log('fetching books');
      fetchBooks();
    }
  }, []);

  const handleReload = () => {
    console.log('running axios');
    return books.map(book =>
      axios.post('http://localhost:8080/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
  };

  const handleClear = () => {
    setLocalBooks([]);
  };

  const handleFetch = () => {
    fetchBooks();
  };

  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex flex-col p-md">
      <section>
        <h2 data-test="heading">Bookish</h2>
        <BookList books={localBooks} />
      </section>
      <div className="mt-2 flex flex-col space-y-3">
        <Button
          onClick={handleReload}
          className="bg-teal-500 w-40"
          color="teal"
          variant="filled"
        >
          Reload Books
        </Button>
        <Button
          onClick={handleFetch}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Fetch Books
        </Button>
        <Button
          onClick={handleClear}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Clear Books
        </Button>
      </div>
    </div>
  );
}
