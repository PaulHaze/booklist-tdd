import { useEffect, useState } from 'react';

import axios from 'axios';

import { BookListContainer } from 'features';

import { Wrapper } from 'components';

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
    <Wrapper>
      <BookListContainer />
    </Wrapper>
  );
}
