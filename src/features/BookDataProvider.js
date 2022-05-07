import { useRemoteService } from 'hooks/useRemoteService';

import { BookListContainer } from './BookListContainer';
import { BookDetailsContainer } from './BookDetailsContainer';

export function BookDataProvider() {
  const { data, loading, hasErrors, reloadData, deleteData } = useRemoteService(
    [],
  );

  return (
    <>
      <BookListContainer
        data={data}
        loading={loading}
        hasErrors={hasErrors}
        reloadData={reloadData}
        deleteData={deleteData}
      />
      <BookDetailsContainer
        data={data}
        loading={loading}
        hasErrors={hasErrors}
        reloadData={reloadData}
        deleteData={deleteData}
      />
    </>
  );
}
