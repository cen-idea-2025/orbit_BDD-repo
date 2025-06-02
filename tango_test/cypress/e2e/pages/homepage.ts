class homepage{
    goToAccount(){
    cy.get('a[href*="/login"]').eq(0).click({ force: true });

    cy.get('input[id="email_field"]').type("ebukafrank@gmail.com");

    cy.get('input[id="password_field"]').type("*Cx^rNaN0S3kGaFi");

    cy.get('button[id = "login_button"]').click({ force: true });
    }

}

export default new homepage();