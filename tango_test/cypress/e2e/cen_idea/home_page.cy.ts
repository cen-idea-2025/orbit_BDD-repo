/// <reference types="cypress" />

describe("", () => {
  it("", () => {
    cy.url().should("contain", "cenidea");
    cy.title().should("contain", "consultancy");
    cy.wait(5000);
    cy.get("button[id='rcc-confirm-button']")
      .should("exist")
      .click({ force: true });
  });
});
