/// <reference types="cypress" />

// Cypress.Commands.add('login', (email, password) => { ... })
//
//

declare namespace Cypress {
  interface Chainable {
    loginAcc(email: string, password: string): Chainable<void>;
  }
}

Cypress.Commands.add("loginAcc", (username: string, password: string) => {
  cy.get("a[class='UserSessionLayout_button__DGOzF']")
    .eq(3)
    .click({ force: true });
  cy.get("input[id='email_field']").type("ebukafrank@gmail.com");
  cy.get("input[id='password_field']").type("*Cx^rNaN0S3kGaFi");
  cy.get("button[id='login_button']").click({ force: true });
});
