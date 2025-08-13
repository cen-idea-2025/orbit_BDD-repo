class consult {
  goToconsult() {
    cy.get('a[id="navbarDropdownMenuLink"]').eq(1).click({force: true});
    cy.get('a[href*="/consulting/live"]').eq(0).click({ force: true });

  }

confirmConsult(){
    cy.get('h2[class="mb-3 ml-2 stays-heading"]').should(
      "include.text",
      "All Bookable Consultations"
    );

}


}

export default new consult();
