import { faker } from '@faker-js/faker';

describe('Hooks Demo', ()=>{

    it('Hooks Demo', ()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
       // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
       cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').eq(0).trigger('mouseover')
        

       cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click();

       cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click();
       //cy.contains('login').click();


       let firstname = faker.internet.username();
       let userId =  faker.string.uuid()
       let username =  faker.internet.username() // before version 9.1.0, use userName()
       let email = faker.internet.email()
       let  phone =faker.person.bio();
       let password = '123123';
       let birthdate =faker.date.birthdate()
       let registeredAt = faker.date.past()

       cy.get('#input-firstname').type(firstname)
       cy.get('#input-lastname').type(username)
       cy.get('#input-email').type(email)
       cy.get('#input-telephone').type(phone);
       cy.get('#input-password').type(password);
       cy.get('#input-confirm').type(password)
       cy.get('.float-right > .custom-control > .custom-control-label').click();
       cy.get('.float-right > .btn').click();

       cy.wait(2000);
       cy.get('#content > :nth-child(3)').should('contain','Congratulations! Your new account has been successfully created!')

       //Mocleassie_Keeling@hotmail.com
       //123123
    })

})