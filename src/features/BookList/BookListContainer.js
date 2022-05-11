import { useState } from 'react';

import { Button } from '@mantine/core';
import { useRemoteService } from 'hooks/useRemoteService';
import { SearchField } from 'components';
import { BookList } from './BookList';

export function BookListContainer() {
  const { data, loading, hasErrors, reloadData, deleteData } = useRemoteService(
    'http://localhost:8080/books',
    [],
  );

  const [searchValue, setSearchValue] = useState('');

  const searchResults = data.filter(x =>
    x.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  console.log(searchResults);

  const handleReload = () => reloadData();

  const handleDelete = () => deleteData();

  return (
    <section>
      <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
      <BookList books={searchResults} loading={loading} hasErrors={hasErrors} />
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
