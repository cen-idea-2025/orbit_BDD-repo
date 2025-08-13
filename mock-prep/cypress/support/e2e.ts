import "./commands";


beforeEach(() => {
    cy.visit("https://cenidea-git-develop-cenidea.vercel.app/");
  cy.clearAllCookies();
  cy.clearLocalStorage();
  cy.wait(5000);
  cy.get("[id='rcc-confirm-button']").click();
});

afterEach(() => {});
