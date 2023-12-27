import lambdaTestDemoHeaderMenu from "../../pages/lambda-test-demo-pom/lambdaTestDemoHeaderMenu";
import lambdaTestDemoRegisterPage from "../../pages/lambda-test-demo-pom/lambdaTestDemoRegisterPage";

describe('Smoke Test LambdaTest eCommerce Playground', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('lambdaTestDemoUrl'))
        cy.contains('strong', 'This is a dummy website for Web Automation Testing').should('have.text', 'This is a dummy website for Web Automation Testing')
        cy.log('Visit site successful!')
      
      })
     
   it('Register a new user', () => {
        lambdaTestDemoHeaderMenu.mouseHoverHeaderMyAccount();
        lambdaTestDemoHeaderMenu.clickHeaderMyAccountRegisterSubmenu();
        lambdaTestDemoRegisterPage.fillOutRegisterFirstNameField();
        lambdaTestDemoRegisterPage.fillOutRegisterLastNameField();
       
    })
});