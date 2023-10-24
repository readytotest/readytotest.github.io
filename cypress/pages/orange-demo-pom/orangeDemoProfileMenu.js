class orangeDemoProfileMenu{

    elements = {
        profileMenu: () => cy.get('p[class="oxd-userdropdown-name"]'),
        profileMenuLogout: () => cy.get('[href="/web/index.php/auth/logout"]') 
       
    }

    openProfileMenu(){
        this.elements.profileMenu().click();
    }

    clickLogoutMenu(){
        this.elements.profileMenuLogout().click();
    }

}

module.exports = new orangeDemoProfileMenu();