import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';

class orangeDemoBuzzPage{

    elements = {
        buzzMessageField:() => cy.get('.oxd-buzz-post-input'),
        buzzMessagePostButton:() => cy.get('button[type="submit"]')
       
    }

    typeBuzzMessage() {
        this.elements.buzzMessageField().type(orangeDemoTestData.formData.buzzMessageText);
    }

    postBuzzMessage() {
        this.elements.buzzMessagePostButton().click();
    }
}

module.exports = new orangeDemoBuzzPage();