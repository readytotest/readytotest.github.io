class sauceDemoCartPage{

    elements = {
        checkoutButton:() => cy.get('#checkout'),
       
    }

    goCheckout() {
        this.elements.checkoutButton().click();
    }
}

module.exports = new sauceDemoCartPage();