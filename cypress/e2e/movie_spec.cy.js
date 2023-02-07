describe('Individual movie flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/')
  })
  
  it('Should return to home page when clicking the back to home button', () => {
    cy.get('.poster:nth-child(1) > img').click()
    cy.get('button').click()
    cy.get('.poster').should('be.visible')
  })
})