describe('e2e test of the random team app', function() {
  it('page has correct content', function() {
    cy.visit('/');
    
    cy.get('h1').should('have.text', 'Random Team App');

    // Check that there are 20 rows on the table
    cy.get('table > tbody > tr').its('length').should('eq', 20);
  })

  it('teams can be created', function() {
    cy.get('.btn').contains('Create random teams').click();

    cy.contains('Team A');
    cy.contains('Team B');

    // Check that there are 10 rows on both tables
    cy.get(':nth-child(1) > table > tbody > tr').its('length').should('eq', 10);
    cy.get(':nth-child(2) > table > tbody > tr').its('length').should('eq', 10);
  })

  it('original list of persons can be viewed', function() {
    cy.get('.btn').contains('Show list of persons').click();

    // Check that there are 20 rows on the table
    cy.get('table > tbody > tr').its('length').should('eq', 20);
  })

  it('previously created teams can be viewed again', function() {
    cy.get('.btn').contains('Show current teams').click();

    cy.get(':nth-child(1) > table > tbody > tr').its('length').should('eq', 10);
    cy.get(':nth-child(2) > table > tbody > tr').its('length').should('eq', 10);
  })

  it('new teams can be created', function() {
    cy.get('.btn').contains('Create random teams').click();

    // Check that there are 10 rows on both tables
    cy.get(':nth-child(1) > table > tbody > tr').its('length').should('eq', 10);
    cy.get(':nth-child(2) > table > tbody > tr').its('length').should('eq', 10);
  })
})