import { Button } from '@mantine/core';
import { useRemoteService } from 'hooks/useRemoteService';
import { BookList } from './BookList/BookList';

export function BookListContainer() {
  const { data, loading, hasErrors, reloadData, deleteData } = useRemoteService(
    [],
  );
  const handleReload = () => reloadData();

  const handleDelete = () => deleteData();

  return (
    <section>
      <BookList books={data} loading={loading} hasErrors={hasErrors} />

      <div className="mt-2 flex flex-col space-y-3">
        <Button
          onClick={handleReload}
          className="bg-teal-500 w-40"
          color="teal"
          variant="filled"
        >
          Reload Books
        </Button>
        <Button
          onClick={handleDelete}
          className="bg-teal-500  w-40"
          color="teal"
          variant="filled"
        >
          Delete API
        </Button>
      </div>
    </section>
  );
}
