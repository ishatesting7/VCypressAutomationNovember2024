describe('DropDown', ()=>{

    it("Dropdown Demo", ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.get('#country').select(9,{force:true});
        //cy.get('#phone').find
        cy.wait(5000);
        //To click or select any of the hidden elements
        
        cy.get('#country')
        .find(':selected')
        .invoke('text')
        .then((selectedText)=>{
            cy.log("Text in Dropdown", selectedText)
        })
        //cy.contains('Australia').should('be.visible');
        //cy.get('#country').should('have.value','australia');
    })
})