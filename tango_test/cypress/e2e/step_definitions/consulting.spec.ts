import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homepage";
import consult from "../pages/consultingPage";

Given("I am logged in", () => {
  homepage.goToAccount();
});

When("I click on the confirm consultation button", () => {
  consult.goToconsult();
});

Then("I confirm consultation page", () => {
  consult.confirmConsult();
});
