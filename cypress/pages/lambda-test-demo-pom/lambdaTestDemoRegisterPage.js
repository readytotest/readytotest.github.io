import { faker } from '@faker-js/faker';

//Have to use a variable here otherwise the pw and the confirm pw won't match
const pwGenerator = faker.internet.password({ length: 8, memorable: true, prefix: 'Q@1' })
//Using variable here so the beginning part of the email will match the first name
const firstNameGenerator = faker.person.firstName()

class lambdaTestDemoRegisterPage{

    elements = {
        registerFirstNameField:() =>  cy.get('#input-firstname'),
        registerLastNameField:() =>  cy.get('#input-lastname'),
        registerEmailField:() => cy.get('#input-email'),
        registerPhoneField:() => cy.get('#input-telephone'),
        registerPasswordField:() => cy.get('#input-password'),
        registerPasswordConfirmField:() => cy.get('#input-confirm'),
        registerAgreeCheckbox:() => cy.get('.custom-control.custom-checkbox.custom-control-inline').find('.custom-control-label'),
        registerContinueButton:() => cy.get('input[type="submit"]'),
        registerSuccessConfirmationText:() => cy.get('h1'),

       
    }

        fillOutRegisterFirstNameField() {
            this.elements.registerFirstNameField().type(firstNameGenerator);
        }

        fillOutRegisterLastNameField() {
            this.elements.registerLastNameField().type(faker.person.lastName());
        }

        fillOutRegisterEmailField() {
            this.elements.registerEmailField().type(`${firstNameGenerator}${faker.string.numeric(2)}@qa-testing-test-${faker.string.numeric(5)}.net`);
        }

        fillOutRegisterPhoneField() {
            this.elements.registerPhoneField().type(`(555) ${faker.string.numeric(3)}-${faker.string.numeric(4)}`);
        }

        fillOutRegisterPasswordField() {
            this.elements.registerPasswordField().type(pwGenerator);
        }

        fillOutRegisterPasswordConfirmField() {
            this.elements.registerPasswordConfirmField().type(pwGenerator);
        }

        fillOutRegisterAgreeCheckbox() {
            this.elements.registerAgreeCheckbox().click();
        }

        clickRegisterContinueButton() {
            this.elements.registerContinueButton().click();
        }

        verifyRegisterSuccessconfirmationText() {
            this.elements.registerSuccessConfirmationText().should('include.text', 'Your Account Has Been Created!');
        }
       

 


}
module.exports = new lambdaTestDemoRegisterPage();