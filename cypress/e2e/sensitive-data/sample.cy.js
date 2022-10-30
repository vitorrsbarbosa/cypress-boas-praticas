describe('Sensitivve data bad practice', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('baseUrl')}/login`);
  });
  it('Fills the form with sensitive data', () => {
    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('s3Cr€7-p@s5w0rd');
  });
  it('Fills the form with sensitive data using Cypress environment', () => {
    cy.get('#email').type(Cypress.env('user_email'));
    cy.get('#password').type(Cypress.env('user_password'));
  });
  it('Fills the form with sensitive data using Cypress environment without logging data', () => {
    cy.get('#email').type(Cypress.env('user_email'));
    cy.get('#password').type(Cypress.env('user_password'), { log: false });
  });
});