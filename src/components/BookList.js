import { Book } from './Book';

export function BookList({ books, loading, hasErrors }) {
  const renderBooks = books.map(book => (
    <Book key={book.name} bookDetails={book} />
  ));
  if (loading) {
    return <h1>loading</h1>;
  }
  if (hasErrors) {
    return <h1>errors</h1>;
  }
  return <div data-test="book-list">{renderBooks}</div>;
}
