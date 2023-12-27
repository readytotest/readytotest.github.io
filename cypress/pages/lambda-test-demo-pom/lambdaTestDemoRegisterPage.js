import { faker } from '@faker-js/faker';

class lambdaTestDemoRegisterPage{

    elements = {
        registerFirstNameField:() =>  cy.get('#input-firstname'),
        registerLastNameField:() =>  cy.get('#input-lastname'),

       
    }

        fillOutRegisterFirstNameField() {
            this.elements.registerFirstNameField().type(faker.name.firstName());
        }

        fillOutRegisterLastNameField() {
            this.elements.registerLastNameField().type(faker.name.lastName());
        }

       

 


}
module.exports = new lambdaTestDemoRegisterPage();