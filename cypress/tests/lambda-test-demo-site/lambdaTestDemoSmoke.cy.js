/* Note: This is a work in progress
Will remove this comment when finished with this script
*/

import lambdaTestDemoHeaderMenu from "../../pages/lambda-test-demo-pom/lambdaTestDemoHeaderMenu";
import lambdaTestDemoRegisterPage from "../../pages/lambda-test-demo-pom/lambdaTestDemoRegisterPage";

describe('Smoke Test LambdaTest eCommerce Playground', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('lambdaTestDemoUrl'))
        //Move next line under pages later
        cy.get('div[data-id="217838"]').find('strong').should('have.text', 'This is a dummy website for Web Automation Testing')
        cy.log('Visit site successful!')
      
      })
     
   it('Register a new user', () => {
        lambdaTestDemoHeaderMenu.mouseHoverHeaderMyAccount();
        lambdaTestDemoHeaderMenu.clickHeaderMyAccountRegisterSubmenu();
        lambdaTestDemoRegisterPage.fillOutRegisterFirstNameField();
        lambdaTestDemoRegisterPage.fillOutRegisterLastNameField();
        lambdaTestDemoRegisterPage.fillOutRegisterEmailField();
        lambdaTestDemoRegisterPage.fillOutRegisterPhoneField();
        lambdaTestDemoRegisterPage.fillOutRegisterPasswordField();
        lambdaTestDemoRegisterPage.fillOutRegisterPasswordConfirmField();
        lambdaTestDemoRegisterPage.fillOutRegisterAgreeCheckbox();
        lambdaTestDemoRegisterPage.clickRegisterContinueButton();
        lambdaTestDemoRegisterPage.verifyRegisterSuccessconfirmationText();
       
    })
});