import { combineReducers } from 'redux';

import booklistSlice from 'features/BookList/booklistSlice';

export default combineReducers({
  booklist: booklistSlice,
});
