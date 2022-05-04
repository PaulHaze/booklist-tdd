import { Book } from './Book';

export function BookList({ books, loading, hasErrors }) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>Errors</p>;
  }
  const renderBooks = books.map(book => (
    <Book key={book.name} bookDetails={book} />
  ));
  return <div data-test="book-list">{renderBooks}</div>;
}
