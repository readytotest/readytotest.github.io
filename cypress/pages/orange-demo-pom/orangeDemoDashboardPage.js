class orangeDemoDashboardPage{

    elements = {
        dashboardHeader:() => cy.contains('.oxd-topbar-header-breadcrumb', 'Dashboard'),
        dashboardTimeAtWork:() => cy.contains('.oxd-text.oxd-text--p', 'Time at Work'),
        dashboardMyActions:() => cy.contains('.oxd-text.oxd-text--p', 'My Actions'),
               
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

}

module.exports = new orangeDemoDashboardPage();