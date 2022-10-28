/// <reference types='cypress'/>
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add('search', term => {
  cy.get('input[type="text"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`);
});

Cypress.Commands.add('updateDestination', data => {
  cy.get('#destination_name')
    .clear()
    .type(data.name);
  cy.get('#destination_description')
    .clear()
    .type(data.description);
  cy.get('input[type="submit"]')
    .click();
});