describe('Iframe Demo', ()=>{

    it('IFrame Demo', ()=>{

        cy.visit('https://www.w3schools.com/html/html_iframe.asp');

        cy.frameLoaded('[title="W3Schools HTML Tutorial"]');

        cy.iframe('[title="W3Schools HTML Tutorial"]').wait(2000).contains('CSS').click();
    })
})