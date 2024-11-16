describe('RadioButton and Checkbox', ()=>{

    it('RadioButton and Checkbox ', ()=>{

        cy.visit('https://demo.guru99.com/test/newtours/reservation.php');

        //cy.get('[value="oneway"]').check();
        cy.get('[value="oneway"]').check();
        cy.wait(1000)
        cy.get('[value="roundtrip"]').check();
    })

    it.only('CheckBox', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com');
        cy.get(':nth-child(11) > :nth-child(3) > .form-check-label').click({force:true});
        cy.get('#tuesday').check();
        cy.wait(2000);
        cy.get(':nth-child(11) > :nth-child(3) > .form-check-label').click();
        cy.get('#tuesday').uncheck({force:true});
        cy.wait(5000);

        cy.get('[type="checkbox"]').check();

        cy.wait(2000)

        cy.get('[type="checkbox"]').uncheck();
        cy.get('[type="checkbox"]').should('have.length', 12);
        cy.get('[type="checkbox"]').eq(0).check();

        cy.get('[type="checkbox"]')
        .its('length')
        .then((countCheckBox)=>{
            cy.log("No of Checkbox", countCheckBox);
            for (let i = 0; i < countCheckBox; i++) {
                cy.get('[type="checkbox"]').eq(i).check()
                cy.wait(200);
                //cy.pause();
            }
        })
    })
})
