import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mantine/core';
import { useRemoteService } from 'hooks/useRemoteService';
import { SearchField } from 'components';
import { BookList } from './BookList';

import { setSearchTerm, getBooksThunk } from './booklistSlice';

export function BookListContainer() {
  const dispatch = useDispatch();
  const { searchTerm, books, isLoading } = useSelector(state => state.booklist);

  const { data, loading, hasErrors, setUrl, reloadData, deleteData } =
    useRemoteService('http://localhost:8080/books', []);

  const handleUpdateSearch = val => {
    dispatch(setSearchTerm(val));
  };
  const handleReload = () => reloadData();

  const handleDelete = () => deleteData();

  useEffect(() => {
    dispatch(getBooksThunk());
    console.log(isLoading);
  }, [dispatch]);

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${searchTerm}`);
  }, [searchTerm]);

  return (
    <section>
      <SearchField
        searchValue={searchTerm}
        setSearchValue={handleUpdateSearch}
      />
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
