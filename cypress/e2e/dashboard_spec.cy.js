describe('Dashboard flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/')
  })
  
  it('User should see the app title on page load', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('User should see movies on page load', () => {
    cy.get('[data-cy="436270"]').should('be.visible')
    cy.get('[data-cy="724495"]').should('be.visible')
    cy.get('[data-cy="436270"]').contains('Black Adam')
    cy.get('[data-cy="724495"]').contains('The Woman King')
  })

  it('User should see the page change views when clicking on a movie, and show additional details', () => {
    cy.get('[data-cy="436270"]').click()
    cy.get('[data-cy="movie/436270"]').should('be.visible')
    cy.get('[data-cy="info/436270"]').should('be.visible')
  })

  it('User should see a searchbar on page load, but not when looking at an individual moive', () => {
    cy.get('[data-cy="search-bar"]').should('be.visible')
    cy.get('[data-cy="436270"]').click()
    cy.get('[data-cy="search-bar"]').should('not.exist')
  })

  it('User should be able to use the search bar to filter through movies', () => {
    cy.get()
  })

})