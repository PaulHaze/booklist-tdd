/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
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
    cy.visit('http://localhost:3000/');
    cy.get('h1[data-test="heading"]').contains('Bookish');
  });
  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should('have.length.lte', 10);
    cy.get('div.book-item').should(pageBooks => {
      expect(pageBooks).to.have.length.lte(10);
      const titles = [...pageBooks].map(x => x.querySelector('h2').innerHTML);
      expect(titles).to.include.members([
        'Refactoring',
        'Domain-driven design',
        'Building Microservices',
      ]);
    });
  });
  it('Goes to the details when page when book title is clicked on', () => {
    cy.visit('http://localhost:3000/');
    cy.get('div.book-item').contains('View Details').eq(0).click();
    cy.url().should('include', '/books/1');
    cy.get('h2.book-title').contains('Refactoring');
  });
});
