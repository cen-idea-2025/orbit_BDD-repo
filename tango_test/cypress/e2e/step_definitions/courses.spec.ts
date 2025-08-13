import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homepage";

Given("I am logged in", () => {
    homepage.goToAccount();
});

When("I search for a course by name", () => {
  cy.get('input[class="form-control px-3 py-2 rounded-pill shadow-lg"]').type(
    "Master Test"
  );
  cy.get('button[type="submit"]').eq(1).click({ force: true });
});

Then("I should see the courses that I searched for", () => {});
