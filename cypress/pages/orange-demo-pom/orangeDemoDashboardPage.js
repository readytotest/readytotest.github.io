import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';

class orangeDemoDashboardPage{

    elements = {
        dashboardHeader:() => cy.contains('.oxd-topbar-header-breadcrumb', 'Dashboard'),
        dashboardTimeAtWork:() => cy.contains('.oxd-text.oxd-text--p', 'Time at Work'),
        dashboardMyActions:() => cy.contains('.oxd-text.oxd-text--p', 'My Actions'),
        dashboardBuzzFeed:() => cy.get('.oxd-text.oxd-text--p.orangehrm-buzz-widget-body')
               
    }

    confirmOnDashboardPage() {
        this.elements.dashboardHeader().should('be.visible');
    }

    confirmDashboardTimeAtWork() {
        this.elements.dashboardTimeAtWork().should('be.visible');
    }

    confirmDashboardMyActions() {
        this.elements.dashboardMyActions().should('be.visible');
    }

    confirmDashboardBuzzFeed() {
        this.elements.dashboardBuzzFeed().first().should('include.text', orangeDemoTestData.formData.buzzMessageText)
    }

}

module.exports = new orangeDemoDashboardPage();