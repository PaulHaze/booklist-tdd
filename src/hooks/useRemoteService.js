import { useEffect, useState } from 'react';

import axios from 'axios';

import { books } from 'data/books';

export const useRemoteService = intial => {
  const [data, setData] = useState(intial);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    setHasErrors(false);
    try {
      const res = await axios.get('http://localhost:8080/books');
      setData(res.data);
    } catch (e) {
      setHasErrors(true);
      console.log(hasErrors);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const reloadData = () => {
    books.forEach(book =>
      axios.post('http://localhost:8080/books', book, {
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
    fetchBooks();
  };

  const deleteData = () => {
    axios.delete('http://localhost:8080/books?_cleanup=true').catch(err => err);
  };

  return { data, loading, hasErrors, reloadData, deleteData };
};
