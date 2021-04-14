describe('VegShare, main page view', () => {
  const baseUrl = 'https://veg-share.herokuapp.com'

  beforeAll(() => {
  //   cy
  //   .fixture('mockData.json')
  //   .then((mockData) => {
  //     cy.intercept('GET', )
  //   })

    cy.visit(baseUrl)

  })

  it ('should have the correct url for the home page on load', () => {
    cy
      .url().should('eq', `${baseUrl}/`)
  });

  it ('should show the site header', () => {
    cy
      .get('header .veg-share-title').contains('Veg-Share')
  })

})