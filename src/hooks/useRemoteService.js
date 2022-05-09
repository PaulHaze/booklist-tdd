import { useEffect, useState } from 'react';

import axios from 'axios';

import { books } from 'data/books';

export const useRemoteService = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  console.log('default param', url);

  const fetchBooks = async () => {
    setLoading(true);
    setHasErrors(false);
    try {
      const res = await axios.get(url);
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
