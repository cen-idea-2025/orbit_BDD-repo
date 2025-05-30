import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am logged into the app", () => {
  cy.get('a[href*="/login"]').eq(0).click({ force: true });

  cy.get('input[id="email_field"]').type("ebukafrank@gmail.com");

  cy.get('input[id="password_field"]').type("*Cx^rNaN0S3kGaFi");

  cy.get('button[id = "login_button"]').click({ force: true });
});

When("I logout", () => {
  cy.get('a[id="dropDownMenuButton"]').click({ multiple: true, force: true });
  cy.get("strong").click({ multiple: true, force: true });
  // cy.url().should('include', '/login');
});

Then("I should be logged out successfully", () => {
  cy.get('h2[class="mb-3 ml-2 stays-heading"]').should(
    "contain",
    "All Courses Available"
  
);
});
