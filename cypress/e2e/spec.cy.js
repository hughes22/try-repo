describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('[name="q"]').type("Ghana")
  })
})