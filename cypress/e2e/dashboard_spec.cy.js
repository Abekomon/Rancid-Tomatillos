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
    
  })

})