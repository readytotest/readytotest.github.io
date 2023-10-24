class orangeDemoVerticalMenu{

    elements = {
        dashboardLink:() => cy.contains('.oxd-main-menu-item', 'Dashboard'),
        myInfoLink:() => cy.contains('.oxd-main-menu-item', 'My Info'),
        buzzLink: () => cy.contains('.oxd-main-menu-item', 'Buzz'),

    }

    clickDashboardLink(){
        this.elements.dashboardLink().click();
    }

    clickMyInfoLink(){
        this.elements.myInfoLink().click();
    }

    clickBuzzLink(){
        this.elements.buzzLink().click();
    }
}

module.exports = new orangeDemoVerticalMenu();