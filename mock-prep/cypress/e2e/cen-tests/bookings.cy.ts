/// <reference types= "cypress" />

describe("", () => {
  it("", () => {
    cy.loginAcc("ebukafrank@gmail.com", "*Cx^rNaN0S3kGaFi");
    cy.get('a[class="btn btn-danger rounded-pill shadow-lg mx-0 mb-2"]').click({
      force: true,
    });
    // //cy.get('input[class="form-control rounded-pill"]')
    //   .eq(0)
    //   .should("contain", "Ebuka Amanoh");

    cy.url().should("contain", "consulting/free");
  });
});
