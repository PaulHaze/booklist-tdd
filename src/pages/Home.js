import { useEffect, useState } from 'react';

import axios from 'axios';

import { BookList } from 'components';

export function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/books');
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex  p-md">
      <section>
        <h2 data-test="heading">Bookish</h2>
        <BookList books={books} />
      </section>
    </div>
  );
}
