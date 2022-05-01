import { Book } from './Book';

export function BookList({ books }) {
  const renderBooks = books.map(book => (
    <Book key={book.name} bookDetails={book} />
  ));
  return <div data-test="book-list">{renderBooks}</div>;
}
