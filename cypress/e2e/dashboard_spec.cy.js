describe('Dashboard flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display the app title on page load', () => {
    cy.get('h1')
    .contains('Rancid Tomatillos')
  })

  it('Should display movies on page load', () => {
    cy.get('.poster').should('be.visible')
    cy.get('h3').contains('Black Adam')
    cy.get('h3').contains('The Woman King')
    cy.get('p').contains('Rating: 4.0')
  })

  it('Should change views when clicking on a movie, and show additional details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    
    cy.get('.poster:nth-child(1) > img').click()
    cy.get('.container > img').should('be.visible')
    cy.get('.info').should('be.visible')
  })
})