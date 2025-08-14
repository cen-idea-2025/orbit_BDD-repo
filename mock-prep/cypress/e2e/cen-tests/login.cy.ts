/// <reference types="cypress" />

describe("Testing login functionality", () => {
  it("enter valid username and password", () => {
    cy.visit("/");
    cy.url().should("contain", "cenidea");
    cy.loginAcc("ebukafrank@gmail.com", "*Cx^rNaN0S3kGaFi");
  });
});
