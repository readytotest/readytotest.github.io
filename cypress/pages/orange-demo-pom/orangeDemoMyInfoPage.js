class orangeDemoMyInfoPage{

    elements = {
        personalDetailsLink:() => cy.contains('.orangehrm-tabs-item', 'Personal Details'),
        contactDetailsLink:() => cy.contains('.orangehrm-tabs-item', 'Contact Details'),
        firstNameField:() => cy.get('input[name="firstName"]'),
        lastNameField:() => cy.get('input[name="lastName"]'),
        //Don't like using nth child from the Cypress selector tool, but couldn't get anything else to work
        workEmailField:() => cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        myInfoSaveButton:() => cy.get('button[type="submit"]'),
        toastMessage:() =>  cy.get('#oxd-toaster_1')

    }

    clickPersonalDetailsLink(){
        this.elements.personalDetailsLink().click();
    }
    
    clickContactDetailsLink(){
        this.elements.contactDetailsLink().click();
    }

    clearWorkEmailField(){
        this.elements.workEmailField().clear();
    }

    clearFirstNameField(){
        this.elements.firstNameField().clear();
    }

    clearLastNameField(){
        this.elements.lastNameField().clear();
    }

    checkIfWorkEmailFieldEmpty(){
        this.elements.workEmailField().invoke('val').should('be.empty');
    } 

    checkIfFirstNameFieldEmpty(){
        this.elements.firstNameField().invoke('val').should('be.empty');
    } 

    checkIfLastNameFieldEmpty(){
        this.elements.lastNameField().invoke('val').should('be.empty');
    } 

    checkIfWorkEmailFieldNotEmpty(){
        this.elements.workEmailField().invoke('val').should('not.be.empty');
    } 

    checkIfFirstNameFieldNotEmpty(){
        this.elements.firstNameField().invoke('val').should('not.be.empty');
    } 

    checkIfLastNameFieldNotEmpty(){
        this.elements.lastNameField().invoke('val').should('not.be.empty');
    } 

    typeWorkEmail(inputWorkEmail){
        this.elements.workEmailField().type(inputWorkEmail);
    }

    typeFirstName(inputFirstName){
        this.elements.firstNameField().type(inputFirstName);
    }

    typeLastName(inputLastName){
        this.elements.lastNameField().type(inputLastName);
    }

    clickFirstMyInfoSaveButton(){
        this.elements.myInfoSaveButton().first().click();
    }

    confirmSaveSuccessful(){
        this.elements.toastMessage().should('include.text', 'Success');
    }

}

module.exports = new orangeDemoMyInfoPage();