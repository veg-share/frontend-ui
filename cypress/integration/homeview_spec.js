describe('VegShare, main page view', () => {
  const baseUrl = 'https://veg-share.herokuapp.com'
  beforeEach(() => {
    cy.visit(baseUrl)
  })
  it ('should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `${baseUrl}/`)
  });
  it ('should show the site header', () => {
    cy
      .get('header .veg-share-title').should('contain', 'Veg-Share')
  });
})