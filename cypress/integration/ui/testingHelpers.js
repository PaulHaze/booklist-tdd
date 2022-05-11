export const goToApp = () => {
  cy.visit('http://localhost:3000/');
};

export const getAppTitle = () => {
  cy.get('h1[data-test="heading"]').contains('Bookish');
};

export const checkBookListLength = bookLength => {
  cy.get('div.book-item').should('have.length.lte', bookLength);
};

export const checkBookListWith = booksArray => {
  goToApp();
  cy.get('div[data-test="book-list"]').should('exist');
  checkBookListLength(10);
  cy.get('div.book-item').should(pageBooks => {
    expect(pageBooks).to.have.length.lte(10);
    const titles = [...pageBooks].map(x => x.querySelector('h2').innerHTML);
    expect(titles).to.include.members(booksArray);
  });
};

export const gotoFirstBookDetails = () => {
  goToApp();
  cy.get('div.book-item').contains('View Details').eq(0).click();
  cy.url().should('include', '/books/1');
  cy.get('h2.book-title').contains('Refactoring');
};

export const performSearch = searchTerm => {
  goToApp();
  checkBookListLength(10);
  cy.get('input[data-test="search"]').type(searchTerm);
  cy.get('div.book-item').eq(0).contains(searchTerm);
};
