class lambdaTestDemoHeaderMenu{

    elements = {
        headerMyAccount:() => cy.get('.nav-item.dropdown.dropdown-hoverable').last(),
        headerMyAccountRegisterSubmenu:() => cy.get('.mz-sub-menu-96.dropdown-menu').find('span').contains('Register'),
       
    }

        mouseHoverHeaderMyAccount() {
            this.elements.headerMyAccount().wait(1).realHover();
        }

        clickHeaderMyAccountRegisterSubmenu() {
            this.elements.headerMyAccountRegisterSubmenu().click();
       }

 


}
module.exports = new lambdaTestDemoHeaderMenu();