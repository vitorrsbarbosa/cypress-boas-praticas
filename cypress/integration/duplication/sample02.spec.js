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
