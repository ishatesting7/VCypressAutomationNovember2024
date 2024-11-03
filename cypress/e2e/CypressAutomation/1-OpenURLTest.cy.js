describe('Verify Login Screen', ()=>{   // Test Scenario Creation

    const a= 10;
    let b = 100;
    var m =true;

    it('Validate the URL', function(){  // Test Cases 1
        cy.visit('https://tutorialsninja.com/demo/');
        cy.url().should('eq','https://tutorialsninja.com/demo/');
        //cy.url().should('eq')
    })

    // it('Validate the Title of the HomePage', function(){  // Test Cases 2

    // })

    // it('Validate the HomePage Image', function(){  // Test Cases 3

    // })
})  
