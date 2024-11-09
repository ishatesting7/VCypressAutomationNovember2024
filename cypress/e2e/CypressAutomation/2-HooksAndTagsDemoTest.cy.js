describe('Hooks Demo', ()=>{

    before(()=>{
        cy.log('I am in before')
    })

    beforeEach(()=>{
        cy.log('I am in before Each')
    })

    after(()=>{
        cy.log('I am in after')
    })

    afterEach(()=>{
        cy.log('I am in after Each')
    })

    it('Hooks Demo', ()=>{

        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

    })

    it('Hooks Demo 2', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
})