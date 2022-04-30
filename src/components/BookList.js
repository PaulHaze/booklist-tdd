import { Book } from './Book';

export function BookList({ books }) {
  const renderBooks = books.map(book => (
    <Book key={book.title} bookDetails={book} />
  ));
  return <div data-test="book-list">{renderBooks}</div>;
}
