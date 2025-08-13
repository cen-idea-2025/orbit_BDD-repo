/// <reference types="cypress" />

describe("Testing login functionality", () => {
  it("enter valid username and password", () => {
    cy.visit("https://cenidea-git-develop-cenidea.vercel.app/");
    cy.get("a[class='UserSessionLayout_button__DGOzF']")
      .eq(3)
      .click({ force: true });
    cy.get("input[id='email_field']").type("ebukafrank@gmail.com");
    cy.get("input[id='password_field']").type("*Cx^rNaN0S3kGaFi");
    cy.get("button[id='login_button']").click({ force: true });
  });
});
