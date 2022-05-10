import { useState } from 'react';

import { truncateText } from 'utils/helpers';

export function BookDetails({ book, loading, hasErrors }) {
  if (loading) {
    return <p>Loading</p>;
  }
  if (hasErrors) {
    return <p>Errors</p>;
  }
  const isLongText = book.description?.length && book.description.length > 299;
  const shortenedDescription = isLongText && truncateText(book.description);

  const [showText, setShowText] = useState(false);

  const handleShowHideText = () => setShowText(prev => !prev);

  const bookDescription = book.description || book.name;

  return (
    <div className="book-item detail bg-white rounded border my-3 p-6">
      <h2 className="book-title">{book.name}</h2>
      <p className="book-description">
        {isLongText ? shortenedDescription : bookDescription}
      </p>
      <button type="button" onClick={handleShowHideText} className="show-more">
        {showText ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}
