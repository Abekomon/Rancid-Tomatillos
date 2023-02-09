describe('Individual movie flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/436270')
  })
  
  it('Should return to home page when clicking the back to home button', () => {
    // cy.get('.home-button').click()
    cy.get('[data-cy="436270"]').should('be.visible')
  })

  it('User should see an error if server is not responding', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { statusCode: 500 })
    cy.get('[data-cy="error-500"]').should('be.visible')
  })

  it('User should see an error if server is not responding', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { statusCode: 404 })
    cy.get('[data-cy="error-400"]').should('be.visible')
  })
})

