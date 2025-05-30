/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

declare namespace Cypress {
  interface Chainable {
    loginID(): Chainable<void>;
  }
}

Cypress.Commands.add("loginID", () => {
  cy.get('a[href*="/login"]').eq(0).click({ force: true });

  cy.get('input[id="email_field"]').type("ebukafrank@gmail.com");

  cy.get('input[id="password_field"]').type("*Cx^rNaN0S3kGaFi");

  cy.get('button[id = "login_button"]').click({ force: true });


});
