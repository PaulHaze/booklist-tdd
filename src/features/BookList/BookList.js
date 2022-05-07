import { BookTitle } from './BookTitle';

export function BookList({ books, loading, hasErrors }) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>Errors</p>;
  }
  const renderBookTitles = books.map(book => (
    <BookTitle key={book.id} bookTitle={book.name} bookId={book.id} />
  ));
  return <div data-test="book-list">{renderBookTitles}</div>;
}
