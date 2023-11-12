import sauceDemoLoginPage from '../../pages/sauce-demo-pom/sauceDemoLoginPage';
import sauceDemoTestData from '../../fixtures/sauce-demo/sauceDemoTestData.json';
import sauceDemoProductsPage from '../../pages/sauce-demo-pom/sauceDemoProductsPage';

describe('Sauce Demo Login Tests', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('sauceDemoUrl'));
              
      });

    it('Valid username/password', () => {

        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
        sauceDemoLoginPage.clickLoginButton();      
        sauceDemoProductsPage.confirmOnProductPage();
    })

    it('Locked out user', () => {

        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameLockedOut);
        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
        sauceDemoLoginPage.clickLoginButton();
        sauceDemoLoginPage.confirmLockedOutMessage();
    })

    it('Empty username', () => {

        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
        sauceDemoLoginPage.clickLoginButton();
        sauceDemoLoginPage.confirmEmptyUsernameMessage();
    })

    it('Empty password', () => {

        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
        sauceDemoLoginPage.clickLoginButton();
        sauceDemoLoginPage.confirmEmptyPasswordMessage();
    })

    it('Invalid username', () => {

        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameInvalid);
        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
        sauceDemoLoginPage.clickLoginButton();
        sauceDemoLoginPage.confirmInvalidUsernameOrPasswordMessage();
    })

    it('Invalid password', () => {

        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordInvalid);
        sauceDemoLoginPage.clickLoginButton();
        sauceDemoLoginPage.confirmInvalidUsernameOrPasswordMessage();
    })

    
});

