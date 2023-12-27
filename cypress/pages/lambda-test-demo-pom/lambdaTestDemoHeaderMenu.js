class lambdaTestDemoHeaderMenu{

    elements = {
        headerMyAccount:() => cy.get('.nav-item.dropdown.dropdown-hoverable').last()

      

       
    }

    mouseHoverHeaderMyAccount() {
        //add wait so hover works, otherwise hover won't work here????
        this.elements.headerMyAccount().wait(1).realHover();
    }

 


}
module.exports = new lambdaTestDemoHeaderMenu();