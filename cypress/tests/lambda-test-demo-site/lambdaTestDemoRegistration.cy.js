/* Note: This is a work in progress
Will remove this comment when finished with this script
*/

import lambdaTestDemoHeaderMenu from "../../pages/lambda-test-demo-pom/lambdaTestDemoHeaderMenu";
import lambdaTestDemoRegisterPage from "../../pages/lambda-test-demo-pom/lambdaTestDemoRegisterPage";

describe('Registration Test LambdaTest eCommerce Playground', () => {
    //Let's run through the registration 5 times in a row
    //All 5 users will have the same first name and password, but different last names and other info
    var i = 0;
    for (i = 0; i < 5 ; i++) { 

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
        lambdaTestDemoRegisterPage.verifyRegisterSuccessConfirmationText();
       
    })
}
});