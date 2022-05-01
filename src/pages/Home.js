import { useEffect, useState } from 'react';

import axios from 'axios';

import { BookList } from 'components';

import { books } from 'data/books';

export function Home() {
  const [localBooks, setLocalBooks] = useState([]);

  // const initDb = async () => {
  //   return books.map(book =>
  //     axios.post('http://localhost:8080/books', book, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }),
  //   );
  // };
  useEffect(() => {
    // initDb();
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/books');
      setLocalBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex  p-md">
      <section>
        <h2 data-test="heading">Bookish</h2>
        <BookList books={localBooks} />
      </section>
    </div>
  );
}
