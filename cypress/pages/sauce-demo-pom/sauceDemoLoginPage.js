class sauceDemoLoginPage{

    elements = {
        usernameLogin: () => cy.get('#user-name'),
        passwordLogin: () => cy.get('#password'),
        buttonLogin: () => cy.get('#login-button'),
    }

    enterUsername(username){
        this.elements.usernameLogin().type(username);
    }

    enterPassword(password){
        this.elements.passwordLogin().type(password);
    }

    clickLoginButton(){
        this.elements.buttonLogin().click();
    }

    confirmLoginButtonExists(){
        this.elements.buttonLogin().should('exist');
    }

}

module.exports = new sauceDemoLoginPage();