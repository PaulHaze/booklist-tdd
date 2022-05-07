export function Book({ bookDetails, bookId }) {
  return (
    <div className="book-item bg-white rounded border my-3 p-3">
      <h2 className="title mb-10 text-2xl">{bookDetails.name}</h2>
      <div className="flex w-full justify-end">
        <a className="" href={`/books/${bookId}`}>
          View Details
        </a>
      </div>
    </div>
  );
}
