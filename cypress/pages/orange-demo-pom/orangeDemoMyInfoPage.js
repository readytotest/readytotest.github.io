class orangeDemoMyInfoPage{

    elements = {
        contactDetailsLink:() => cy.contains('.orangehrm-tabs-item', 'Contact Details'),
        //Don't like using nth child from the Cypress selector tool, but couldn't get anything else to work
        workEmailField:() => cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        myInfoSaveButton:() => cy.get('button[type="submit"]'),
        toastMessage:() =>  cy.get('#oxd-toaster_1')

    }

    clickContactDetailsLink(){
        this.elements.contactDetailsLink().click();
    }

    clearWorkEmailField(){
        this.elements.workEmailField().clear();
    }

    checkIfFieldEmpty(){
        this.elements.workEmailField().invoke('val').should('be.empty');
    } 

    checkIfFieldNotEmpty(){
        this.elements.workEmailField().invoke('val').should('not.be.empty');
    } 

    typeWorkEmail(inputWorkEmail){
        this.elements.workEmailField().type(inputWorkEmail);
    }

    clickMyInfoSaveButton(){
        this.elements.myInfoSaveButton().realClick();
    }

    confirmSaveSuccessful(){
        this.elements.toastMessage().should('include.text', 'Success');
    }

}

module.exports = new orangeDemoMyInfoPage();