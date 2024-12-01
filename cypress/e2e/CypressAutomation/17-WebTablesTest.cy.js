describe('Web Table Operation', ()=>{
    let pageNumber;

    beforeEach(()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/index.php?route=common/login');

        cy.wait(2000);

        cy.get("#input-username").wait(1000).type('demo');

        cy.get('#input-password').wait(1000).type('demo');

        cy.get('button').contains('Login').click();

        cy.get('#menu-customer > .parent').click();

        cy.get('#collapse5 > :nth-child(1) > a').click();
    })


    it('Web Table', ()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', 7);

        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length',10);
    })

    it('Validate specific element', ()=>{

        let expcustomer = 'BillyCBrooks@teleworm.com';
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(1)>td:nth-child(3)').should('have.text',expcustomer)
    })

    it('Print all the element', ()=>{

        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row,index,$rows)=>{

            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    it.only('Count the pages', ()=>{

        cy.get('[href="#collapse4"]').click();
        cy.get('#collapse4 > :nth-child(1) > a').click();

        cy.wait(2000);

        cy.get('.row > .text-right').then((temp)=>{

            let count = temp.text();
            cy.log(count);
            cy.wait(1000);
            pageNumber = count.substring(count.indexOf("(")+1,count.indexOf("Pages")-1);

            cy.log(pageNumber);


        })
    })

    it('Do click on NEXT button', ()=>{

        for(let p = 1;p<=pageNumber;p++)
        {
            if(pageNumber>1)
            {
                cy.log('Active Page',p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(2000);
            }
        }
    })
})