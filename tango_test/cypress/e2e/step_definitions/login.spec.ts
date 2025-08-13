import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homepage";

Given("I am in landing page of the application", () => {
  cy.visit("/");
});

When("I enter valid credentials", () => {
  homepage.goToAccount();
});

Then("I should be logged in successfully", () => {
  homepage.confirmlogin();
});
