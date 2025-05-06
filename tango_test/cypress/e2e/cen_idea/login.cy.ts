/// <reference types="cypress" />

describe("Login into CEN account with valid credentials", () => {
  it("Login", () => {
    
cy.loginID("ebukafrank@gmail.com", "Cx^rNaN0S3kGaFi");


    //cy.get('a[href*="/course?deliveryMode"]').eq(4).click({force:true});
  });
});
