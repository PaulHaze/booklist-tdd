// import { useEffect, useState } from 'react';

// import axios from 'axios';

export function BookDetails({ book, loading, hasErrors }) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>Errors</p>;
  }

  return (
    <div className="book-item bg-white rounded border my-3 p-6">
      <h2 className="book-title">{book.name || 'Loading'}</h2>
    </div>
  );
}
