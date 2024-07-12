describe('Valid Scenarios', () => {
    const baseUrl = Cypress.config('baseUrl');
    const emailUser = Cypress.env('emailUser'); // Correct way to access env variable

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
    });
    
    it('uploaded documents', () => {
        cy.get('input[name="email"]').type('admin@expinc.io');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('AANMELDEN').click();

        //upload file
        cy.wait(10000);
        cy.get('button.MuiIconButton-root').eq(1).click();
        cy.get('.css-duqwza > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .css-1t12if7 > :nth-child(2) > .MuiBox-root > .MuiList-root > .MuiListItem-root > .MuiButtonBase-root').should('be.visible').click();

        //upload file txt
        const filetxt = '001sample.txt';
        cy.get('button').contains('Upload nieuwe gegevens').click();
        cy.get('input[type="file"]').attachFile(filetxt);
        cy.get('button').contains('Upload Files').click();
        cy.wait(5000)

        //upload file pdf
        const filepdf = '001sample.pdf';
        cy.get('button').contains('Upload nieuwe gegevens').click();
        cy.get('input[type="file"]').attachFile(filepdf);
        cy.get('button').contains('Upload Files').click();
        cy.wait(5000)
        
        //upload file docx
        const filedocx = '001sample.docx';
        cy.get('button').contains('Upload nieuwe gegevens').click();
        cy.get('input[type="file"]').attachFile(filedocx);
        cy.get('button').contains('Upload Files').click();
        cy.wait(5000)

        // //upload file srt
        // const filesrt = '001sample.srt';
        // cy.get('button').contains('Upload nieuwe gegevens').click();
        // cy.get('input[type="file"]').attachFile(filesrt);
        // cy.get('button').contains('Upload Files').click();
        // cy.wait(5000)

        // //upload file xlsx
        // const filexlsx = '001sample.xlsx';
        // cy.get('button').contains('Upload nieuwe gegevens').click();
        // cy.get('input[type="file"]').attachFile(filexlsx);
        // cy.get('button').contains('Upload Files').click();
        // cy.wait(5000)

        // //upload file csv
        // const filecsv = '001sample.csv';
        // cy.get('button').contains('Upload nieuwe gegevens').click();
        // cy.get('input[type="file"]').attachFile(filecsv);
        // cy.get('button').contains('Upload Files').click();
        // cy.wait(5000)

        //download file
        cy.get(':nth-child(1) > :nth-child(4) > .css-sph8u0').click();
        cy.wait(5000)

        //remove file
        cy.get(':nth-child(1) > :nth-child(4) > .css-oof6do').click();
        cy.get('.MuiButton-containedSecondary').click();
        cy.wait(5000)


        //upload file rar
        const filerar = '001sample.rar';
        cy.get('button').contains('Upload nieuwe gegevens').click();
        cy.get('input[type="file"]').attachFile(filerar);
        cy.get('button').contains('Upload Files').click();
        cy.wait(5000)
    })
});