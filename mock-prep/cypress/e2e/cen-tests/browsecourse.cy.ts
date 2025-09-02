/// <reference types="cypress" />

describe("", () => {
  it("", () => {
    cy.visit("/");
    cy.loginAcc("ebukafrank@gmail.com", "*Cx^rNaN0S3kGaFi");
    cy.get('input[class="form-control px-3 py-2 rounded-pill shadow-lg"]')
      .type("Master")
      .click({ force: true });
    cy.get('h2[class="mb-3 ml-2 stays-heading"]').should(
      "contain",
      "Courses containing Master"
    );
  });
});
