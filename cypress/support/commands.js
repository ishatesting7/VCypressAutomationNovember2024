// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add("autoHealingFind", (locator, options = {}) => {
    const { retries = 3, interval = 1000, alternativeLocators = [] } = options;
  
    const findElement = (retryCount) => {
      return cy.get(locator)
        .then(($element) => {
          return $element; // Return the element if found
        })
        .catch((error) => {
          if (retryCount === retries) {
            // If all retries are exhausted, throw the error
            throw error;
          } else {
            // Try alternative locators if available
            if (alternativeLocators.length > retryCount) {
              return findElement(retryCount + 1);
            } else {
              // Wait for the specified interval before retrying
              return cy.wait(interval).then(() => findElement(retryCount + 1));
            }
          }
        });
    };
  
    return findElement(0);
  });