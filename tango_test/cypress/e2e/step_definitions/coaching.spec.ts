import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homepage";
import coaching from "../pages/coachingPage";

Given("I am logged into my account", () => {
  homepage.goToAccount();
});

When("I click on the coaching page link", () => {
  coaching.gotoCoaching();
});

Then("the coaching page is displayed correctly", () => {
  coaching.confirmcoaching();
});
