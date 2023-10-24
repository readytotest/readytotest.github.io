import orangeDemoLoginPage from '../../pages/orange-demo-pom/orangeDemoLoginPage';
import orangeDemoDashboardPage from '../../pages/orange-demo-pom/orangeDemoDashboardPage';
import orangeDemoTestData from '../../fixtures/orange-demo/orangeDemoTestData.json';
import orangeDemoProfileMenu from '../../pages/orange-demo-pom/orangeDemoProfileMenu';
import orangeDemoVerticalMenu from '../../pages/orange-demo-pom/orangeDemoVerticalMenu';
import orangeDemoMyInfoPage from '../../pages/orange-demo-pom/orangeDemoMyInfoPage';
import orangeDemoBuzzPage from '../../pages/orange-demo-pom/orangeDemoBuzzPage';


/* Need to look into another alternative for random data
like https://fakerjs.dev/ when I get time */
const numRandom = () => Math.floor((Math.random() + 1) * 9999);
const insertNum = numRandom();
const randomEmailGenerator = `john.smith${insertNum}@fake-email-${insertNum}.org`;
const randomFirstNameGenerator = `John${insertNum}`;
const randomLastNameGenerator = `Smith${insertNum}`;


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
        /*Need to add the wait because if one of the it blocks fails, then 
        after each will fail on confirming the login button unless the wait is there.
        The wait isn't required if all it blocks pass???? */
        cy.wait(1000);
        orangeDemoLoginPage.confirmLoginButtonExists();
        cy.log('Logout successful!');
      
    });

    it('My Info: edit name and work email', () => {
     
        orangeDemoVerticalMenu.clickMyInfoLink();
        
        orangeDemoMyInfoPage.clickPersonalDetailsLink();
        orangeDemoMyInfoPage.clearFirstNameField();
        orangeDemoMyInfoPage.checkIfFirstNameFieldEmpty();
        orangeDemoMyInfoPage.typeFirstName(randomFirstNameGenerator);
        orangeDemoMyInfoPage.checkIfFirstNameFieldNotEmpty();
        orangeDemoMyInfoPage.clearLastNameField();
        orangeDemoMyInfoPage.checkIfLastNameFieldEmpty();
        orangeDemoMyInfoPage.typeLastName(randomLastNameGenerator);
        orangeDemoMyInfoPage.checkIfLastNameFieldNotEmpty();
        orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
        //This wait is required or save won't occur
        cy.wait(1000);
        orangeDemoMyInfoPage.confirmSaveSuccessful();

        orangeDemoMyInfoPage.clickContactDetailsLink();
        orangeDemoMyInfoPage.clearWorkEmailField();
        orangeDemoMyInfoPage.checkIfWorkEmailFieldEmpty();
        orangeDemoMyInfoPage.typeWorkEmail(randomEmailGenerator);
        orangeDemoMyInfoPage.checkIfWorkEmailFieldNotEmpty();
        orangeDemoMyInfoPage.clickFirstMyInfoSaveButton();
        //This wait is required or save won't occur
        cy.wait(1000);
        orangeDemoMyInfoPage.confirmSaveSuccessful();
                 
        })

    it('Buzz: add post. Dashboard: check if buzz post appears and confirm headings on page', () => {
        
        orangeDemoVerticalMenu.clickBuzzLink();
        orangeDemoBuzzPage.typeBuzzMessage(orangeDemoTestData.formData.buzzMessageText);
        orangeDemoBuzzPage.postBuzzMessage();
        orangeDemoVerticalMenu.clickDashboardLink();
        orangeDemoDashboardPage.confirmDashboardBuzzFeed();
        orangeDemoDashboardPage.confirmDashboardTimeAtWork();
        orangeDemoDashboardPage.confirmDashboardMyActions();
                  
        })
        
      });