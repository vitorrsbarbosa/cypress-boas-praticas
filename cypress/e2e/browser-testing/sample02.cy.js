/// <reference types="cypress" />
describe('Browser testing bad practice - Second sample', () => {
  beforeEach(() => {
    cy.visit('https://hackernews-seven.vercel.app');
  });

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a')
    // .first()
    // .click()
      .should('have.attr', 'href', 'https://99percentinvisible.org/episode/guerrilla-public-service/')
      .should('have.attr', 'target', '_blank');
    // Assert that a new tab was opened in the correct URL
  });
});
