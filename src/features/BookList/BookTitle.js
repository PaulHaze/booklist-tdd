import { Link } from 'react-router-dom';

export function BookTitle({ bookTitle, bookId }) {
  return (
    <div className="book-item bg-white rounded border-2 border-blue-900/30 shadow-sm my-3 sm:my-0 p-3">
      <div className="flex flex-col justify-between h-full ">
        <h2 className="title mb-10 text-2xl">{bookTitle}</h2>
        <div className="flex w-full justify-end">
          <Link className="" to={`/books/${bookId}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
