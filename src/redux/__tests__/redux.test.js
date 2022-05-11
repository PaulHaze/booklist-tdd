import { setSearchTerm } from 'features/BookList/booklistSlice';

import store from '../store';

describe('BooklistContainer actions', () => {
  it('Should initially set search to an empty string', () => {
    const state = store.getState().booklist;
    expect(state.searchTerm).toEqual('');
  });
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
