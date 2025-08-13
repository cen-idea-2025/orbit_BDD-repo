import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homepage from "../pages/homepage";

Given("I am on the homepage", () => {
  homepage.goToAccount();
});

When(
  "I scroll down and click on the {string} link in the footer",
  (s: string) => {}
);
