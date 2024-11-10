describe('Intercept Example', ()=>{

    it('Intercept Example', ()=>{

        cy.visit('https://reqres.in/');
        cy.intercept('POST','api/users', (req)=>{

            req.reply({

                status:200,
                body:{
                    "name":"john",
                    "job":"QA Manager"
                }
            })
        }).as('updateUser')
        cy.get("[data-id=post]").click();
        cy.wait('@updateUser')
   
    })

        it.only('should intercept the GET request to /v2/pet', () => {
          // Intercept the GET request to the /v2/pet endpoint
          cy.intercept('GET', 'https://petstore.swagger.io/v2/pet').as('getPets');
      
          // Trigger some action that will make the request (e.g., visit the page)
          cy.visit('https://petstore.swagger.io');
      
          // Wait for the intercepted request
          cy.wait('@getPets').then((interception) => {
            // You can inspect the request and response here
            console.log('Intercepted request:', interception);
      
            // Optionally, you can assert on the response status code
            expect(interception.response.statusCode).to.equal(200);
          });
        });
      
        it('should mock the POST request to /v2/pet', () => {
          // Intercept the POST request to the /v2/pet endpoint
          cy.intercept('POST', 'https://petstore.swagger.io/v2/pet', {
            statusCode: 201,
            body: { id: 123, name: 'Fluffy', status: 'available' },
          }).as('createPet');
      
          // Trigger the action (e.g., create a pet)
          cy.visit('https://petstore.swagger.io');
          
          // Wait for the intercepted request
          cy.wait('@createPet').then((interception) => {
            // Log the intercepted request and check the mock response
            console.log('Intercepted and mocked request:', interception);
            
            // You can assert on the mocked response
            expect(interception.response.statusCode).to.equal(201);
            expect(interception.response.body).to.have.property('name', 'Fluffy');
          });
        });
      
})
