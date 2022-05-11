import { TextInput } from '@mantine/core';

import { BiSearch } from 'react-icons/bi';

export function SearchField({ searchValue, setSearchValue }) {
  const handleChange = e => setSearchValue(e.target.value);
  return (
    <div className="mb-3 flex justify-end">
      <TextInput
        className="w-full max-w-sm"
        data-test="search"
        value={searchValue}
        onChange={handleChange}
        rightSection={<BiSearch size={14} color="gray" />}
        placeholder="Search book titles"
      />
    </div>
  );
}
