describe('VegShare, main page view', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it ('Should show a loading status while fetching posts', () => {
  //   cy
  //     .get('.loading').should('contain', 'Loading')
  //     .should('be.visible')
  // });

  it ('should show the site header', () => {
    cy
      .get('header').should('be.visible')
      .find('.veg-share-title').should('contain', 'Garden Party')
  });

  it ('should be able to navigate between home and profile views', () => {
    cy
      .get('header .header-links')
      .find('.link-button .home-link').should('have.class', 'hidden')
      .get('header .header-links')
      .find('.link-button .profile-link').should('contain', 'Profile')
      .should('have.attr', 'href', '/profile')
      .click()

      .url().should('include', '/profile')
      .get('header .header-links')
      .find('.link-button .profile-link').should('have.class', 'hidden')

      .get('header .header-links')
      .find('.link-button .home-link').should('contain', 'Home')
      .should('have.attr', 'href', '/')
      .click()

      .get('header .header-links')
      .find('.link-button .home-link').should('have.class', 'hidden')
  });

  it ('Should display all posts on the home page by default',  () => {
    cy
      .get('.home-view').should('be.visible')
      .find('.feed-container .feed-title').should('contain', 'All Posts')

      .get('.home-view .feed-container')
      .get('.post-container')
      .find('.single-post').should('have.length', 350)
  });

})