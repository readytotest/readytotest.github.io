import { randomFirstNameGenerator, randomLastNameGenerator, usernameGenerator, passwordGenerator } from '/cypress/fixtures/orange-demo/orangeDemoFakeDataGenerator.js';

class OrangeDemoPimPage{

    elements = {
        pimAddButton:() => cy.contains('button', 'Add'),
        pimFirstNameField:() => cy.get('input[name="firstName"]'),
        pimLastNameField:() => cy.get('input[name="lastName"]'),
        pimCreateLoginDetailsSlider:() => cy.get('input[type="checkbox"]'),
        pimUsernameField:() => cy.get('.oxd-input').eq(5),
        pimPasswordField1:() => cy.get('.oxd-input').eq(6),
        pimPasswordField2:() => cy.get('.oxd-input').eq(7),
        pimSaveButton:() => cy.get('button[type="submit"]'),
        pimSearchButton:() => cy.contains('button[type="submit"]', 'Search'),
        pimEmployeeNameField:() => cy.get('input[placeholder="Type for hints..."]').first(),
        pimFirstListedLastName:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(3)

    }

   clickPimAddButton(){
    this.elements.pimAddButton().click();
   }

   typePimFirstNameField(){
    this.elements.pimFirstNameField().type(randomFirstNameGenerator);
   }

   typePimLastNameField(){
    this.elements.pimLastNameField().type(randomLastNameGenerator);
   }

   clickPimCreateLoginDetailsSlider(){
    this.elements.pimCreateLoginDetailsSlider().click({force:true});
   }

   typePimUsernameField(){
    this.elements.pimUsernameField().type(usernameGenerator);
   }

   typePimPasswordField1(){
    this.elements.pimPasswordField1().type(passwordGenerator);
   }

   typePimPasswordField2(){
    this.elements.pimPasswordField2().type(passwordGenerator);
   }

   clickPimSaveButton(){
    this.elements.pimSaveButton().click().wait(1000);
   }

   confirmPimFirstNameField(){
    this.elements.pimFirstNameField().should('have.value', randomFirstNameGenerator);
   }

   findEmployeeInPimEmployeeNameField(){
    this.elements.pimEmployeeNameField().type(randomFirstNameGenerator).wait(2000).type("{upArrow}{enter}");
}

   clickPimSearchButton(){
    this.elements.pimSearchButton().click();
}

   confirmEmployeeAdded(){
   this.elements.pimFirstListedLastName().should('have.text', randomLastNameGenerator);
}


}

module.exports = new OrangeDemoPimPage