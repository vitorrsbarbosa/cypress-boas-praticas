describe('Code duplication bad practice - First Sample', () => {
  beforeEach('access page', () => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories');

    cy.visit('https://hackernews-seven.vercel.app');
    cy.wait('@getStories');

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .clear();
  });
  it('searches by typing and hitting enter', () => {
    cy.get('input[type="text"]')
      .type('frontend testing{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });

  it('searches by typing and pressing the search button', () => {
    cy.get('input[type="text"]')
      .type('frontend testing');

    cy.contains('button', 'Search')
      .should('be.visible')
      .click();

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });
});
