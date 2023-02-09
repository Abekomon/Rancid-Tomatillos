describe('Individual movie flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/436270')
  })
  
  it('User should see a single movie and details about the movie', () => {
    cy.get('[data-cy="movie/436270"]').should('be.visible')
    cy.get('[data-cy="tagline/436270"]').should('be.visible')
    cy.get('[data-cy="overview/436270"]').should('be.visible')
    cy.get('[data-cy="release_date/436270"]').should('be.visible')
    cy.get('[data-cy="budget/436270"]').should('be.visible')
    cy.get('[data-cy="revenue/436270"]').should('be.visible')
    cy.get('[data-cy="runtime/436270"]').should('be.visible')
    cy.get('[data-cy="genrelist/436270"]').should('be.visible')
  })

  it('User should be able to navigate back to the home page', () => {
    cy.get('[data-cy="home"]').click()
    cy.get('[data-cy="436270"]').should('be.visible')
  })

  it('User should see an error if server is not responding', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { statusCode: 500 })
    cy.get('[data-cy="error-500"]').should('be.visible')
  })

  it('User should see an error if bad path was entered', () => {
    cy.visit('http://localhost:3000/436270')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { statusCode: 404 })
    cy.get('[data-cy="error-400"]').should('be.visible')
  })
})

