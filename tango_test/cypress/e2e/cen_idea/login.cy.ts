/// <reference types="cypress" />

describe("Login into CEN account with valid credentials", () => {
  it("Login", () => {
    cy.loginID();

    

    //cy.get('a[href*="/course?deliveryMode"]').eq(4).click({force:true});
  });
});
