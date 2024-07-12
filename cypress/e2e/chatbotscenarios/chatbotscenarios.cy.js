describe('Valid Scenarios', () => {
    const baseUrl = Cypress.config('baseUrl');
    const emailUser = Cypress.env('emailUser'); // Correct way to access env variable

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
    });
    
    it('uploaded documents', () => {
        const filename ='210330_A4_Placemat_CCE_Bewegen_bij_Probleemgedrag.pdf';
        cy.get('input[name="email"]').type('admin@expinc.io');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('AANMELDEN').click();

        //upload file
        cy.wait(10000);
        cy.get('button.MuiIconButton-root').eq(1).click();
        cy.get('.css-duqwza > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .css-1t12if7 > :nth-child(2) > .MuiBox-root > .MuiList-root > .MuiListItem-root > .MuiButtonBase-root').should('be.visible').click();
        cy.get('button').contains('Upload nieuwe gegevens').click();
        cy.get('input[type="file"]').attachFile(filename);
        cy.get('button').contains('Upload Files').click();

        //chat bot answers questions about CCE
        cy.get('button.MuiIconButton-root').eq(1).click();
        cy.get('.css-duqwza > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .css-1t12if7 > .css-xbr6m3 > .MuiBox-root > .MuiList-root > .MuiListItem-root > .MuiButtonBase-root').should('be.visible').click();
        cy.get('.MuiInputBase-root').type('wat is kwetsbare situatie ?')
        cy.get('.css-v20fs0 > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click();
        cy.wait(10000)

        //chat bot can answer very general questions
        cy.get('.MuiInputBase-root').type('wie is spiderman ?')
        cy.get('.css-v20fs0 > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click();
        cy.wait(10000)
    })
});