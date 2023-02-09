describe('Dashboard flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display the app title on page load', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('Should display movies on page load', () => {
    cy.get('[data-cy="436270"]').should('be.visible')
    cy.get('[data-cy="724495"]').should('be.visible')
    cy.get('[data-cy="436270"]').contains('Black Adam')
    cy.get('[data-cy="724495"]').contains('The Woman King')
  })

  it('Should change views when clicking on a movie, and show additional details', () => {
    cy.get('[data-cy="436270"]').click()
    cy.get('.container > img').should('be.visible')
    cy.get('.info').should('be.visible')
  })
})

it('User should see an error page if server is not working', () => {
  cy.visit('http://localhost:3000/')
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 })
  cy.get('[data-cy="error-500"]').should('be.visible')
})

it('User should see an error page if server is not working', () => {
  cy.visit('http://localhost:3000/')
  cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 404 })
  cy.get('[data-cy="error-400"]').should('be.visible')
})