class orangeDemoVerticalMenu{

    elements = {
        dashboardLink:() => cy.contains('.oxd-main-menu-item', 'Dashboard'),
        myInfoLink:() => cy.contains('.oxd-main-menu-item', 'My Info'),
        buzzLink: () => cy.contains('.oxd-main-menu-item', 'Buzz'),
        recruitmentLink: () => cy.contains('.oxd-main-menu-item', 'Recruitment'),

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

    clickRecruitmentLink(){
        this.elements.recruitmentLink().click();
    }
}

module.exports = new orangeDemoVerticalMenu();