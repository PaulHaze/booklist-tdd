import { useEffect, useState } from 'react';

import axios from 'axios';

import { BookListContainer } from 'features';

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

  return (
    <div className="h-[100vh] bg-gradient-to-br from-teal-700/20 to-sky-500/30 flex flex-col p-md">
      <h1 className="mb-4" data-test="heading">
        Bookish
      </h1>
      <BookListContainer />
    </div>
  );
}
