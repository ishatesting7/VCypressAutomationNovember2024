describe('Read Data From Fixture', ()=>{

    it('Read Data', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('userData').then((data)=>{
        
            cy.get('[name="username"]').type(data.username);
            
            cy.get('[name="password"]').type(data.password);

            cy.get('[type="submit"]').click();

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)

            cy.log(data.address[0].street1);
        })
    })
})