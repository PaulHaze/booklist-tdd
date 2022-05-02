import { useEffect, useState } from 'react';

import { Button } from '@mantine/core';

import axios from 'axios';

import { BookList } from 'components';
import { BookListContainer } from 'features';

import { books } from 'data/books';

export function Home() {
  const [localBooks, setLocalBooks] = useState([]);
  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/books');
    setLocalBooks(res.data);
  };

  useEffect(() => {
    if (!localBooks.length) {
      fetchBooks();
    }
  }, []);

  const handleReload = () => {
    books.forEach(book =>
      axios.post('http://localhost:8080/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
  };

  const handleDelete = () => {
    axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err);
  };

  const handleClear = () => {
    setLocalBooks([]);
  };

  const handleFetch = () => {
    fetchBooks();
  };

  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex flex-col p-md">
      <h1 className="mb-4" data-test="heading">
        Bookish
      </h1>
      <BookListContainer />
    </div>
  );
}
