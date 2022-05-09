import { useEffect, useState } from 'react';

import axios from 'axios';

export function BookDetails({ id }) {
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  return (
    <div className="book-item bg-white rounded border my-3 p-6">
      <h2 className="book-title">{book.name || 'Loading'}</h2>
    </div>
  );
}
