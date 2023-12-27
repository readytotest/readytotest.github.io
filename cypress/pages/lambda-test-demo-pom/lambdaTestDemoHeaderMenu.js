class lambdaTestDemoHeaderMenu{

    elements = {
        headerMyAccount:() => cy.get('.nav-item.dropdown.dropdown-hoverable').last(),
        headerMyAccountRegisterSubmenu:() => cy.contains('span[class="title"]', 'Register')

       
    }

        mouseHoverHeaderMyAccount() {
            this.elements.headerMyAccount().wait(1).realHover();
        }

        clickHeaderMyAccountRegisterSubmenu() {
            this.elements.headerMyAccountRegisterSubmenu().click({force:true});
       }

 


}
module.exports = new lambdaTestDemoHeaderMenu();