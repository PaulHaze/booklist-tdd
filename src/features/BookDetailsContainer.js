import { useParams } from 'react-router-dom';

import { BookDetails } from './BookList/BookDetails';

export function BookDetailsContainer() {
  const { id } = useParams();
  // const book = data.find(b => b.id === id);
  // console.log(book);
  return (
    <div>
      <BookDetails id={id} />
    </div>
  );
}
