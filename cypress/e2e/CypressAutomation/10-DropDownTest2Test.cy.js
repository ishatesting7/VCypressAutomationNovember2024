describe('Dropdown Demo', ()=>{

    it('Dropdown Without Select', ()=>{


        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

        cy.get('#select2-billing_country-container').click();

        cy.get('.select2-search__field').type('India').type('{enter}');

        cy.get('#select2-billing_country-container').should('have.text','India');

    
    })
    it('AutoSuggestive Dropdown', ()=>{

        cy.visit('https://www.wikipedia.org/');

        cy.get('#searchInput').type('Delhi');

        cy.get('.suggestion-title').contains('Delhi University').click();

    })

    it.only('Dynamic Dropdown', ()=>{


        cy.visit('https://www.google.com/');

        cy.get('[class="gLFyf"]').type('Cypress Automation');

        cy.wait(2000);

        cy.get('[class="sbct PZPZlf"]').should('have.length.above',10);

        //click on cypress automation job

        //for(let index = 0; index < 12; index++)
        //.then(parameter)=>{parameter.text()=='cypress'}
        cy.get('div.wM6W7d').each(($el, index, $list) => {
            if ($el.text() === 'cypress automation jobs') {

                //let text1 = $el.text().includes('cypress automation jobs')
              cy.wrap($el).click();
              return false;
            } else {
              cy.log('Require Dropdown Value is Missing');
            }
            //fetch and xhr

          })
          cy.get('.lv7K9c > .sjVJQd').click();
        cy.contains('Work from home').click();
    })
})