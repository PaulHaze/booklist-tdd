describe('Bookish Application', () => {
  it('Visits Bookish and finds an h2 with "Bookish"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2[data-test="heading"]').contains('Bookish');
  });
});
