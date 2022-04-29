import { books } from 'data/books';

import { Book } from './Book';

export function BookList() {
  return (
    <>
      {books.map(book => (
        <Book key={book.id} bookDetails={book} />
      ))}
    </>
  );
}
