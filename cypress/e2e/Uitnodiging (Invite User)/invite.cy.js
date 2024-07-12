describe('Valid Scenarios', () => {
    const baseUrl = Cypress.config('baseUrl');
    const emailUser = Cypress.env('emailUser'); // Correct way to access env variable

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.wait(10000);
        cy.get('input[name="email"]').type('admin@expinc.io');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('AANMELDEN').click();
        cy.get('.css-ov5d0v > .MuiButtonBase-root').click();
    });
    
    it('Invite user with valid e-mail', () => {
        cy.get('input[name="email"]').should('be.visible').type(emailUser);
        cy.wait(5000);
        cy.get('input[name="first_name"]').should('be.visible').type('bagus');
        cy.get('input[name="last_name"]').should('be.visible').type('Prawira');
        cy.contains('button', 'NODIG NU UIT').should('be.visible').click();
        cy.get('p').should('be.visible').and('contain', 'Invitation sent successfully');
        
    });
});