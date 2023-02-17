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
describe('Code duplication bad practice - Second Sample', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories');

    cy.visit('https://hackernews-seven.vercel.app');
    cy.wait('@getStories');

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear();
  });

  let terms = ['reactjs', 'vuejs'];

  terms.forEach((terms) => {
    it(`search for ${terms}`, () => {
      cy.get('@searchField')
        .type(`${terms}{enter}`);

      cy.wait('@getStories');

      cy.get('.table-row')
        .should('have.length', 100);
    });
  });

  it('searches for "reactjs"', () => {
    cy.get('@searchField')
      .type('reactjs{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });

  it('searches for "vuejs"', () => {
    cy.get('@searchField')
      .type('vuejs{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });
});
describe('Code duplication bad practice - Second Sample', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories');

    cy.visit('https://hackernews-seven.vercel.app');
    cy.wait('@getStories');

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear();
  });

  let terms = ['reactjs', 'vuejs'];

  terms.forEach((terms) => {
    it(`search for ${terms}`, () => {
      cy.get('@searchField')
        .type(`${terms}{enter}`);

      cy.wait('@getStories');

      cy.get('.table-row')
        .should('have.length', 100);
    });
  });

  it('searches for "reactjs"', () => {
    cy.get('@searchField')
      .type('reactjs{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });

  it('searches for "vuejs"', () => {
    cy.get('@searchField')
      .type('vuejs{enter}');

    cy.wait('@getStories');

    cy.get('.table-row')
      .should('have.length', 100);
  });
});
Cypress._.times(3, () => {
  describe('Code duplication bad practice - Third Sample', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories');

      cy.visit('https://hackernews-seven.vercel.app');
      cy.wait('@getStories');
    });

    it('searches for the same term 3 times', () => {
      cy.search('cypress.io');

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1);
      });

      cy.search('cypress.io');

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1);
      });

      cy.search('cypress.io');

      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1);
      });
    });
  });
});
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
