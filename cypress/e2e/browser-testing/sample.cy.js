/// <reference types="cypress" />
describe('Browser testing bad practices - First sample', () => {

  it('directs the user to the login page when clicking the login link', () => {
    cy.visit('https://notes-serverless-app.com');
    cy.contains('.nav a', 'Login').as('login')
      .should('have.attr', 'href', '/login')
      .should('not.have.attr', 'target');
    cy.get('@login').click();
    cy.url().should('be.equal', 'https://notes-serverless-app.com/login');
  });
  it('tests a browser feature instead of an app feature', () => {
    cy.visit('https://hackernews-seven.vercel.app');
    cy.get('.table-row a')
      // .first()
      // .click()
      .should('have.attr', 'href', 'https://99percentinvisible.org/episode/guerrilla-public-service/')
      .should('have.attr', 'target', '_blank');
    // Assert that a new tab was opened in the correct URL
  });
});