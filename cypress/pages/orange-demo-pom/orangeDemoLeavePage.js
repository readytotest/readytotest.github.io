import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import { employeeStaticPartialFirstName } from '/cypress/fixtures/orange-demo/orangeDemoFakeDataGenerator.js';

class orangeDemoLeavePage{
    elements = {
        entitlementsHeaderMenu:() => cy.contains('.oxd-topbar-body-nav-tab-item', 'Entitlements'),
        addEntitlementLink:() => cy.contains('.oxd-topbar-body-nav-tab-link', 'Add Entitlements'),
        entitlementEmployeeNameField:() => cy.get('input[placeholder="Type for hints..."]'),
        leaveTypeDropdownMenu:() => cy.get('.oxd-select-text-input').first(),
        leaveTypeUsVacation:() => cy.get('.oxd-select-wrapper').contains('US - Vacation'),
        entitlementField:() => cy.get('.oxd-input').eq(1),
        entitlementSaveButton:() => cy.get('button[type="submit"]'),
        entitlementConfirmSaveModal:() => cy.contains('Confirm'),
        firstListedEntitlementDays:() => cy.get('.oxd-table-cell.oxd-padding-cell').eq(5)


    }

    clickEntitlementsHeaderMenu() {
        this.elements.entitlementsHeaderMenu().click();
    }

    clickAddEntitlementLink(){
        this.elements.addEntitlementLink().click();
    }

    findEmployeeInEntitlementEmployeeNameField(){
        this.elements.entitlementEmployeeNameField().type(employeeStaticPartialFirstName).wait(2000).type("{upArrow}{enter}");
    }

    clickLeaveTypeDropdownMenu(){
        this.elements.leaveTypeDropdownMenu().click()
    }

    selectUsVacationFromLeaveTypeMenu(){
        this.elements.leaveTypeUsVacation().click()
    }

    addDaysToEntitlementField(){
        this.elements.entitlementField().type(orangeDemoTestData.formData.vacationDays);
    }

    clickEntitlementSaveButton(){
        this.elements.entitlementSaveButton().click();
    }

    clickEntitlementConfirmSaveModal(){
        this.elements.entitlementConfirmSaveModal().click();
    }

    confirmFirstListedEntitlementdays(){
        this.elements.firstListedEntitlementDays().should('have.text', orangeDemoTestData.formData.vacationDays)
    }
}

module.exports = new orangeDemoLeavePage()
//