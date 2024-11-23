describe('Java Script Alert Popup', ()=>{

    it('Java Script Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsAlert()"]').click();

        cy.on('window:alert',(temp)=>{

            expect(temp).to.contains("I am a JS Alert");

        })

        cy.get('#result').should('have.text','You successfully clicked an alert');

    

    })

    it('Java Script Confirm - OK Button',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contains("I am a JS Confirm");

        })

        cy.get('#result').should('have.text','You clicked: Ok');

    })



    it('Java Script Confirm - Cancel Button',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(temp)=>{

            expect(temp).to.contains("I am a JS Confirm");

        })

        cy.on('window:confirm', ()=> false);

        cy.get('#result').should('have.text','You clicked: Cancel');

    })

    it.only('Handle Prompt Window', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

        cy.window().then((wind) =>{

            cy.stub(wind, 'prompt').returns('I am learning cypress');
        })

        cy.get('[onclick="jsPrompt()"]').click();


    })
})