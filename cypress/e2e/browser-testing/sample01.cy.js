/// <reference types="cypress" />
describe('Browser testing bad practices - First sample', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com');
  });
  it('directs the user to the login page when clicking the login link', () => {
    cy.contains('.nav a', 'Login').as('login')
      .should('have.attr', 'href', '/login')
      .should('not.have.attr', 'target');
    cy.get('@login').click();
    cy.url().should('be.equal', 'https://notes-serverless-app.com/login');
  });
});