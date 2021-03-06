describe('Simple, green donut utilization chart with right-aligned legend Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#donut-utilization-simple-right-green-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/donut-utilization-simple-right-green-demo-nav-link');
  });

  it('Verify donut chart', () => {
    cy.get('.pf-c-chart').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('GBps');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-c-chart > svg').should('have.attr', 'width', '230');
    cy.get('.pf-c-chart > svg').should('have.attr', 'height', '300');
  });
});
