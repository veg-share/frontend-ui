describe('Garden Party, profile page view', () => {
  before(() => {
    cy
      .visit('/')

    cy
      .get('header .header-links')
      .find('.link-button .profile-link')
      .click()
  })

  // it ('Should show a loading status while fetching posts', () => {
  //   cy
  //     .get('.loading').should('contain', 'Loading')
  //     .should('be.visible')
  // });

  it ('Should have the correct url when routed to the profile page', () => {
    cy
      .url().should('include', '/profile')
  })

  it ('should show the site header', () => {
    cy
      .get('header').should('be.visible')
      .find('.veg-share-title').should('contain', 'Garden Party')
  });

  // it ('Should display all posts on the home page by default',  () => {
  //   cy
  //     .get('.home-view').should('be.visible')
  //     .find('.feed-container .feed-title').should('contain', 'All Posts')

  //     .get('.home-view .feed-container .post-container')
  //     .find('.single-post').should('have.length', 350)
  // });

  it ('should be able to navigate back to home', () => {
    cy
      .get('header .header-links')
      .find('.link-button .home-link').should('contain', 'Home')
      .should('have.attr', 'href', '/')
      .click()
  });
})