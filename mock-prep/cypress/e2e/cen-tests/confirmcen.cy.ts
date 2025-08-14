/// <reference types="cypress" />

describe("", () => {
  it("", () => {
    cy.loginAcc("ebukafrank@gmail.com", "*Cx^rNaN0S3kGaFi");
    cy.get("div[class*='Toastify__toast-icon']").should("exist");
  });
});
