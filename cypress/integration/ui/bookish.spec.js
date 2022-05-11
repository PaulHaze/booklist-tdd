/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-await */
// import axios from 'axios';
// import { books } from '../../../src/data/books';

// const API_URL = 'http://localhost:8080/books';
// const API_DELETE = `${API_URL}?_cleanup=true`;

import {
  goToApp,
  getAppTitle,
  checkBookListWith,
  gotoFirstBookDetails,
  performSearch,
} from './testingHelpers';

describe('Bookish Application', () => {
  /*   
before(async () => {
    try {
      return await axios.delete(API_DELETE);
    } catch (err) {
      return err;
    }
  });
  beforeEach(async () => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Domain-driven design', id: 2 },
      { name: 'Building Microservices', id: 3 },
    ];
    for (const book of books) {
      await axios.post(API_URL, book, {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  });
  afterEach(async () => {
    try {
      return await axios.delete('http://localhost:8080/books?_cleanup=true');
    } catch (err) {
      return err;
    }
  }); 
*/

  it('Visits Bookish and finds an h1 with "Bookish"', () => {
    goToApp();
    getAppTitle();
  });
  it('Shows a book list', () => {
    checkBookListWith([
      'Refactoring',
      'Domain-driven design',
      'Building Microservices',
    ]);
  });
  it('Goes to the details when page when book title is clicked on', () => {
    gotoFirstBookDetails();
  });
  it('Searches for books by title', () => {
    performSearch('desi');
  });
});
