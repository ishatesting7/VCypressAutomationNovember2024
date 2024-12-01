describe('Work with Calendar', ()=>{

    it('Calendar Test Cases',()=>{

        cy.visit('https://www.spicejet.com');
        cy.wait(10000);
        cy.get('[data-testid="guest-submit-btn"]').click();
        cy.wait(10000);
        cy.get('[data-testid="search-destination-code"]').click();
        cy.contains('BLR').click();

        cy.get('.r-zg41ew > :nth-child(1) > .r-1loqt21 > .r-1awozwy').click();
        cy.get('[data-testid="undefined-month-December-2024"]').contains('29').click();
        cy.get('.r-icoktb > .r-1loqt21 > .r-1awozwy').click()
        cy.contains('29').click();
   
    })
})