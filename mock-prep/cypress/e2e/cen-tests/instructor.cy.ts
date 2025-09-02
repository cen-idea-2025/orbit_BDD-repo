/// <reference types="cypress" />

describe("click on instructor button", () => {
  it("", () => {
    cy.visit("/");
    cy.loginAcc("ebukafrank@gmail.com", "*Cx^rNaN0S3kGaFi");
    cy.get('a[class="UserSessionLayout_button__DGOzF"]')
      .eq(2)
      .click({ force: true });
    // //cy.get('h2[class*="registerinstructorleftpanel_title__a4bF8"]').should(
    //   "contain",
    //   "Become an Instructor"
    // );
  });
});
