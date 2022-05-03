export function Book({ bookDetails }) {
  return (
    <div className="book-item">
      <h2 className="title">{bookDetails.name}</h2>
    </div>
  );
}
