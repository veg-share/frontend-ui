describe('VegShare, main page view', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it ('should show the site header', () => {
    cy
      .get('header .veg-share-title').should('contain', 'Garden Party')
  });
})