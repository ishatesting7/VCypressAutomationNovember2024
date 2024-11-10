describe('Mouse Operation', ()=>{

    it('Mouse Operation', ()=>{

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('not.be.visible');

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').trigger('mouseover').click();

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('be.visible');


        //cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a')

    })

    it('Right Click', ()=>{

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('not.be.visible');

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').rightclick();

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('be.visible');


        //cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a')

    })

    it('Double Click', ()=>{

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('not.be.visible');

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').dblclick();

        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > div > div > ul > li:nth-child(1)').should('be.visible');

        //cy.get('.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a')

    })
})