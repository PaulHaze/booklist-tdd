import { books } from 'data/books';

import { Book } from './Book';

export function BookList() {
  const renderBooks = books.map(book => (
    <Book key={book.id} bookDetails={book} />
  ));
  return <div data-test="book-list">{renderBooks}</div>;
}
