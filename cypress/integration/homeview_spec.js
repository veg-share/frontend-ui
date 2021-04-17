describe('VegShare, main page view', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it ('should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `http://localhost:3000`)
  });
  it ('should show the site header', () => {
    cy
      .get('header .veg-share-title').should('contain', 'Garden Party')
  });
})