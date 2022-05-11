import { useState, useEffect } from 'react';

import { Button } from '@mantine/core';
import { useRemoteService } from 'hooks/useRemoteService';
import { SearchField } from 'components';
import { BookList } from './BookList';

export function BookListContainer() {
  const { data, loading, hasErrors, setUrl, reloadData, deleteData } =
    useRemoteService('http://localhost:8080/books', []);

  const [searchValue, setSearchValue] = useState('');

  const handleReload = () => reloadData();

  const handleDelete = () => deleteData();

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${searchValue}`);
  }, [searchValue]);

  return (
    <section>
      <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
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
