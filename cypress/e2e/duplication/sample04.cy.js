describe('Code duplication bad practice - Forth sample', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW');
  });
  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('#friend').check();
    cy.get('#publication').check();
    cy.get('#social-media').check();
  });
  it('checks all checkboxes with only one command', () => {
    cy.get('fieldset div input[type="checkbox"]').check();
  });
});