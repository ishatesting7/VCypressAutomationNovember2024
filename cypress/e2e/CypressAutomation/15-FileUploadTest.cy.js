describe('File Upload', ()=>{

    it('File Upload', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile('userData.json');

        cy.get('#file-submit').click();
    })

    it('File Upload - Rename', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#file-upload').attachFile({filePath:'userData.json',fileName:'myfiledetails.pdf'});

        cy.get('#file-submit').click();
    })

    it('File Upload - DragandDrop', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').attachFile('userDataMulti.json',{subjectType:'drag-n-drop'});

        cy.get('#file-submit').click();
    })

    it.only('File Upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload').attachFile(["userData.json","example.json"]);

    })
})