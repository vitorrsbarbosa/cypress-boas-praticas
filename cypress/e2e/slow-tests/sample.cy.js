describe('Slow tests bad practice - First sample', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories');

    cy.visit('https://hackernews-seven.vercel.app');
    cy.wait('@getStories');

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear();
  });

  it('searches by typing and hitting enter', () => {
    cy.get('@searchField')
      .type('frontend testing{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length',
        3);
  });
});
describe('Slow tests bad practice - Second sample', () => {
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com');

    cy.contains('.btn', 'Signup')
      .click();

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz');
    cy.get('#confirmPassword').type('foobahbaz');

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup');

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz');
    cy.get('#confirmPassword').type('foobahbaz');

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup');

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz', { log: false });
    cy.get('#confirmPassword').type('foobahbaz', { log: false });

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
});
describe('Slow tests bad practice - Second sample', () => {
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com');

    cy.contains('.btn', 'Signup')
      .click();

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz');
    cy.get('#confirmPassword').type('foobahbaz');

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup');

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz');
    cy.get('#confirmPassword').type('foobahbaz');

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
  it('does not enable signup on different passwords', () => {
    cy.visit('https://notes-serverless-app.com/signup');

    cy.get('#email').type('joe@example.com');
    cy.get('#password').type('foobarbaz', { log: false });
    cy.get('#confirmPassword').type('foobahbaz', { log: false });

    cy.contains('button', 'Signup')
      .should('be.disabled');
  });
});