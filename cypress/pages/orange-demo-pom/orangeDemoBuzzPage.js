class orangeDemoBuzzPage{

    elements = {
        buzzMessageField:() => cy.get('.oxd-buzz-post-input'),
        buzzMessagePostButton:() => cy.get('button[type="submit"]')
       
    }

    typeBuzzMessage(inputBuzzMessage) {
        this.elements.buzzMessageField().type(inputBuzzMessage);
    }

    postBuzzMessage() {
        this.elements.buzzMessagePostButton().click();
    }
}

module.exports = new orangeDemoBuzzPage();