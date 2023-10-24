import orangeDemoLoginPage from '../../pages/orange-demo-pom/orangeDemoLoginPage';
import orangeDemoDashboardPage from '../../pages/orange-demo-pom/orangeDemoDashboardPage';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import orangeDemoProfileMenu from '../../pages/orange-demo-pom/orangeDemoProfileMenu';
import orangeDemoVerticalMenu from '../../pages/orange-demo-pom/orangeDemoVerticalMenu';
import orangeDemoMyInfoPage from '../../pages/orange-demo-pom/orangeDemoMyInfoPage';

const numRandom = () => Math.floor((Math.random() + 1) * 9999);
const insertNum = numRandom();
const randomEmailGenerator = `user@fake-email-${insertNum}.org`;

describe('Orange Demo Smoke Test', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('orangeDemoUrl'));
        orangeDemoLoginPage.enterUsername(orangeDemoTestData.loginCredentials.usernameValid);
        orangeDemoLoginPage.enterPassword(orangeDemoTestData.loginCredentials.passwordValid);
        orangeDemoLoginPage.clickLoginButton();      
        orangeDemoDashboardPage.confirmOnDashboardPage();
        cy.log('Login successful!')
      
      });

    afterEach(() => {

        orangeDemoProfileMenu.openProfileMenu();
        orangeDemoProfileMenu.clickLogoutMenu();
        orangeDemoLoginPage.confirmLoginButtonExists();
        cy.log('Logout successful!');
      
    });

    it('Check dashboard', () => {
        orangeDemoDashboardPage.confirmDashboardTimeAtWork();
        orangeDemoDashboardPage.confirmDashboardMyActions();
                
      })

    it('Edit and Save Data in My Info', () => {
        orangeDemoVerticalMenu.clickMyInfoLink();
        orangeDemoMyInfoPage.clickContactDetailsLink();
        orangeDemoMyInfoPage.clearWorkEmailField();
        orangeDemoMyInfoPage.checkIfFieldEmpty();
        orangeDemoMyInfoPage.typeWorkEmail(randomEmailGenerator);
        orangeDemoMyInfoPage.checkIfFieldNotEmpty();
        orangeDemoMyInfoPage.clickMyInfoSaveButton();
        //This wait is required or the email won't save
        cy.wait(1000);
        orangeDemoMyInfoPage.confirmSaveSuccessful();
                 
        })
        
      });