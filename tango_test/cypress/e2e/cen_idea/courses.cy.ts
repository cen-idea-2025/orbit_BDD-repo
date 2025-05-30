/// <reference types="cypress" />

import { multiply } from "cypress/types/lodash";

describe("", () => {
  it("", () => {
    cy.loginID();

    cy.get('a[href*="/course/6582bc30abfdc35317579f99"]')

      .eq(0)
      .click({ force: true });

    cy.get('button[class="btn-block py-1 rounded-pill"]').click({
      force: true,
    });

    //cy.get("select").select(1).should("have.value", "08/05/2025");

    cy.get("select").select("12/05/2025").should("have.value", "12/05/2025");

    cy.get('button[class*="btn-block py-1 rounded-pill"]').click({
      force: true,
    });

     cy.get('button[class*="py-2 booking-btn rounded-pill"]').click({
       force: true,
     });  




    //how to pinpoint the particular option in a dropbar or how to use cy.select()

  
  });
});
