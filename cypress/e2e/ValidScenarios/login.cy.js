describe('Valid Scenarios', () => {
  const baseUrl = Cypress.config('baseUrl');
  const emailUser = Cypress.config('emailUser');
  beforeEach(() => {
      cy.visit(baseUrl);
      cy.wait(10000);
  });

  it('Login with valid email and password (admin)', () => {
      cy.get('input[name="email"]').type('admin@expinc.io')
      cy.get('input[name="password"]').type('password')
      cy.get('button').contains('AANMELDEN').click();
  });
  it('Login with valid email and password (user)', () => {
      cy.get('input[name="email"]').type('bagus@expinc.io')
      cy.get('input[name="password"]').type('password')   
      cy.get('button').contains('AANMELDEN').click()
  });


//invalid scenarios
  it('login with email field empty', () => {
      cy.get('input[name="password"]').type('password')
      cy.get('button').contains('AANMELDEN').click()
  });
  it('login with password field empty', () => {
      cy.get('input[name="email"]').type('bagus@expinc.io')
      cy.get('button').contains('AANMELDEN').click()
  });

  it('Login with invalid email "not registered"', () => {
    cy.get('input[name="email"]').type('bagus12345@expinc.io')
    cy.get('input[name="password"]').type('password')
    cy.get('button').contains('AANMELDEN').click();
});
  it('Login with invalid email "wrong format"', () => {
      cy.get('input[name="email"]').type('bagus.expinc.io')
      cy.get('input[name="password"]').type('password')
      cy.get('button').contains('AANMELDEN').click();
  });

it('Login with invalid password, valid email', () => {
  cy.get('input[name="email"]').type('bagus@expinc.io')
  cy.get('input[name="password"]').type('Password123')
  cy.get('button').contains('AANMELDEN').click();
});

it('Login with invalid password, valid email 3 times', () => {
  for (let i = 0; i < 0 ; i++){
  cy.get('input[name="email"]').type('bagus@expinc.io')
  cy.get('input[name="password"]').type('Password123')
  cy.get('button').contains('AANMELDEN').click();
  }
});


});

describe('Redirection to Other Sections', () => {
  const baseUrl = Cypress.config('baseUrl');
  beforeEach(() => {
      cy.visit(baseUrl);
      cy.wait(5000);
  });

  it('Forget Password redirect user to Forget Password Page', () => {
      cy.contains('Wachtwoord vergeten?').click();
  });
});