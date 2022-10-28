describe('Unnecessary complexity anti-patter', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW');
  });

  it('checks the checkbox only if not checked', () => {
    cy.get('#agree')
      .check()
      .should('be.checked');
  });
});