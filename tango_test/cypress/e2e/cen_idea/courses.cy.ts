/// <reference types="cypress" />

describe("", () => {
  it("", () => {
    cy.get('a[href*="/course"]').eq(3).click({ force: true });

    cy.get('a[href*="/course/68120ad635b9e1b92c752a63"]')
      .eq(2)
      .click({ force: true });
    cy.get('h2[class="font-weight-bolder mt-5"]').should(
      "contain",
      "Fullstack web development: Beginners to Advanced with Live Projects"
    );
  });
});
