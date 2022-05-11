import { setSearchTerm } from 'features/BookList/booklistSlice';

describe('BooklistContainer actions', () => {
  it('should update the search term', () => {
    const term = 'test';
    const expected = {
      payload: term,
      type: 'booklistSlice/setSearchTerm',
    };
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  });
});
