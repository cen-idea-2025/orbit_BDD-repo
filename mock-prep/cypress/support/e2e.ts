import "./commands";

beforeEach(() => {
  cy.visit("/");
  cy.clearAllCookies();
  cy.clearLocalStorage();
  cy.wait(5000);
  cy.get("[id='rcc-confirm-button']").click();
});

afterEach(() => {
  cy.viewport(0, 0);
});
