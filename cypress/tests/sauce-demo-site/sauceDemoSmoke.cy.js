import sauceDemoLoginPage from '../../pages/sauce-demo-pom/sauceDemoLoginPage';
import sauceDemoProductsPage from '../../pages/sauce-demo-pom/sauceDemoProductsPage';
import sauceDemoCartPage, { goCheckout } from '../../pages/sauce-demo-pom/sauceDemoCartPage';
import sauceDemoCheckoutPage from '../../pages/sauce-demo-pom/sauceDemoCheckoutPage';
import sauceDemoTestData from '../../fixtures/sauce-demo/sauceDemoTestData.json';

describe('Sauce Demo Smoke Test', () => {

    beforeEach(() => {

        cy.visit(Cypress.env('sauceDemoUrl'));
        sauceDemoLoginPage.enterUsername(sauceDemoTestData.loginCredentials.usernameValid);
        sauceDemoLoginPage.enterPassword(sauceDemoTestData.loginCredentials.passwordValid);
        sauceDemoLoginPage.clickLoginButton();      
        sauceDemoProductsPage.confirmOnProductPage();
        cy.log('Login successful!')
      
      });
        
it('Add/delete items, complete check out', () => {
 
  sauceDemoProductsPage.addBackpackToCart();
  sauceDemoProductsPage.removeBackpackFromCart();
  sauceDemoProductsPage.addBikeLightToCart();
  sauceDemoProductsPage.clickShoppingCart();

  sauceDemoCartPage.goCheckout();

  sauceDemoCheckoutPage.enterFirstName(sauceDemoTestData.customerInfo.firstName);
  sauceDemoCheckoutPage.enterLastName(sauceDemoTestData.customerInfo.lastName);
  sauceDemoCheckoutPage.enterZip(sauceDemoTestData.customerInfo.zipCode);
  sauceDemoCheckoutPage.clickContinue();
  sauceDemoCheckoutPage.confirmBikeLightInCheckOut();
  sauceDemoCheckoutPage.confirmBackpackNotInCheckout();
  sauceDemoCheckoutPage.confirmPaymentType(sauceDemoTestData.checkoutValues.paymentInfo);
  sauceDemoCheckoutPage.confirmShippingType(sauceDemoTestData.checkoutValues.shippingInfo);
  sauceDemoCheckoutPage.confirmSubtotalPrice(sauceDemoTestData.checkoutValues.subtotalAmount);
  sauceDemoCheckoutPage.confirmTaxPrice(sauceDemoTestData.checkoutValues.taxAmount);
  sauceDemoCheckoutPage.confirmTotalPrice(sauceDemoTestData.checkoutValues.totalAmount);
  sauceDemoCheckoutPage.clickFinish();
  sauceDemoCheckoutPage.confirmComplete();
  
})
  
});

