describe('Error page flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see an error page if server is not working', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
    cy.get('[data-cy="error-500"]').should('be.visible')
  })

  it('User should see an error page if bad path was entered', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 })
    cy.get('[data-cy="error-400"]').should('be.visible')
  })

})