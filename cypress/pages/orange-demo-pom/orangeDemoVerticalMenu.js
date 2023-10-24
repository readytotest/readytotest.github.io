class orangeDemoVerticalMenu{

    elements = {
        myInfoLink:() => cy.contains('.oxd-main-menu-item', 'My Info'),

    }

    clickMyInfoLink(){
        this.elements.myInfoLink().click();
    }
}

module.exports = new orangeDemoVerticalMenu();