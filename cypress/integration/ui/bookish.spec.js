/* eslint-disable no-return-await */
// import axios from 'axios';
// import { books } from '../../../src/data/books';

// const API_URL = 'http://localhost:8080/books';
// const API_DELETE = `${API_URL}?_cleanup=true`;

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
    ];
    books.forEach(async item => {
      try {
        return await axios.post(API_URL, item, {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        return err;
      }
    });
  });
  afterEach(async () => {
    try {
      return await axios.delete('http://localhost:8080/books?_cleanup=true');
    } catch (err) {
      return err;
    }
  }); 
  */

  it('Visits Bookish and finds an h2 with "Bookish"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish');
  });
  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should('have.length.lte', 10);
    cy.get('div.book-item').should(pageBooks => {
      expect(pageBooks).to.have.length.lte(10);
      const titles = [...pageBooks].map(x => x.querySelector('h2').innerHTML);
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design']);
    });
  });
});

/* 
THEIRS
  before(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err);
  });
  afterEach(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err);
  });
  beforeEach(() => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Domain-driven design', id: 2 },
    ];
    return books.map(
      async item =>
        await axios.post('http://localhost:8080/books', item, {
          headers: { 'Content-Type': 'application/json' },
        }),
    );
  });
*/
