// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useRemoteService } from 'hooks/useRemoteService';

import { BookDetails } from './BookDetails';

export function BookDetailsContainer() {
  const { id } = useParams();
  const { data, loading, hasErrors } = useRemoteService(
    `http://localhost:8080/books/${id}`,
    {},
  );
  return (
    <BookDetails book={data} loading={loading} hasErrors={hasErrors} id={id} />
  );
}
