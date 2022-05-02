import { useEffect, useState } from 'react';

import { Button } from '@mantine/core';

import axios from 'axios';

import { BookList } from 'components';

import { books } from 'data/books';

export function BookListContainer() {
  const [localBooks, setLocalBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    setHasErrors(false);
    try {
      const res = await axios.get('http://localhost:8080/books');
      setLocalBooks(res.data);
    } catch (e) {
      setHasErrors(true);
      console.log(hasErrors);
    } finally {
      setLoading(false);
    }
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
  return loading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <section>
      <BookList books={localBooks} />
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
