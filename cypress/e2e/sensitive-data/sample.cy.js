describe('Sensitivve data bad practice', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login');
  });
  it('Fills the form with sensitive data', () => {
    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('s3Cr€7-p@s5w0rd');
  });
  it('Fills the form with sensitive data using Cypress environment', () => {
    cy.get('#email').type(Cypress.env('CYPRESS_USER_EMAIL'));
    cy.get('#password').type(Cypress.env('CYPRESS_USER_PASSWORD'));
  });
  it('Fills the form with sensitive data using Cypress environment without logging data', () => {
    cy.get('#email').type(Cypress.env('CYPRESS_USER_EMAIL'));
    cy.get('#password').type(Cypress.env('CYPRESS_USER_PASSWORD'), { log: false });
  });
});