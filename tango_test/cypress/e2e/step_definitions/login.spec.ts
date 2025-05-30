import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import homepage from '../pages/homepage';

Given("I logged into my account",()=>{
    homepage.goToAccount();
})

When('I enter valid credentials', () => {
  cy.log("testin .....2");
})

Then("I should be logged in successfully", () => {
    cy.log("testin .....3");
});

