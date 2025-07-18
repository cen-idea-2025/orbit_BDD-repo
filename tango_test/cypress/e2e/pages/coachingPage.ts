class coaching {
  confirmcoaching(){
    cy.get('h2[class="display-4 stays-heading font-weight-bold"]').should(
    "include.text",
    "Transform Your Future with Tailored Coaching"
  );
  }

    gotoCoaching(){

        cy.get('a[id="navbarDropdownMenuLink"]').eq(2).click({ force: true });
        cy.get('a[href="/coaching/executive-coaching"]')
          .eq(1)
          .click({ force: true });

    }






}



export default new coaching();