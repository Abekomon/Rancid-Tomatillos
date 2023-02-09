describe('Individual movie flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' })
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', { fixture: 'black-adam.json' })
    cy.visit('http://localhost:3000/436270')
  })
  
  it('Should return to home page when clicking the back to home button', () => {
    cy.get('.home-button').click()
    cy.get('[data-cy="436270"]').should('be.visible')
  })
})