import axios from 'axios';
// import { books } from '../../../src/data/books';

const API_URL = 'http://localhost:8080/books';
// const API_DELETE = `${API_URL}?_cleanup=true`;

describe('Bookish Application', () => {
  before(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err);
  });
  beforeEach(() => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Domain-driven design', id: 2 },
      { name: 'Building Micro-service', id: 3 },
    ];

    return books.map(item =>
      axios.post('http://localhost:8080/books', item, {
        headers: { 'Content-Type': 'application/json' },
      }),
    );
  });
  afterEach(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => err);
  });

  it('Visits Bookish and finds an h2 with "Bookish"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish');
  });
  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should('have.length', 2);
    cy.get('div.book-item').should(pageBooks => {
      expect(pageBooks).to.have.length(2);
      const titles = [...pageBooks].map(x => x.querySelector('h2').innerHTML);
      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design']);
    });
  });
});
