describe("Sauce Labs Swag Labs", () => {
    it("should log in and add a product to the cart", () => {
      // Visit the Sauce Labs Swag Labs website
      cy.visit("https://www.saucedemo.com/v1/");
  
      // Auto-healing find with retries and alternative locators for the username input field
      cy.autoHealingFind("#user-name, [data-test=username]", {
        retries: 5,
        interval: 1000,
        alternativeLocators: ['#user-name', '[data-test=username]']
      }).type("standard_user");
  
      // Auto-healing find with retries and alternative locators for the password input field
      cy.autoHealingFind("#password, [data-test=password]", {
        retries: 5,
        interval: 1000,
        alternativeLocators: ['#password', '[data-test=password]']
      }).type("secret_sauce");
  
      // Auto-healing find with retries and alternative locators for the login button
      cy.autoHealingFind("#login-button, [data-test=login-button]", {
        retries: 5,
        interval: 1000,
        alternativeLocators: ['#login-button', '[data-test=login-button]']
      }).click();
  
      // Auto-healing find with retries and alternative locators for the add to cart button
      cy.autoHealingFind(".btn_inventory, [data-test=add-to-cart-sauce-labs-bike-light]", {
        retries: 5,
        interval: 1000,
        alternativeLocators: ['.btn_inventory', '[data-test=add-to-cart-sauce-labs-bike-light]']
      }).click();
  
      // Assert that the cart icon badge shows '1'
      cy.get(".shopping_cart_badge").should("contain.text", "1");
    });
  });