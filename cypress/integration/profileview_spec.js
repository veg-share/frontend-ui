describe('Garden Party, profile page view', () => {
  before(() => {
    cy
      .visit('/')
  })

  it ('Should show a loading status while fetching posts', () => {
    cy
      .get('.loading').should('contain', 'Loading')
      .should('be.visible')
  });

  it ('Should have the correct url when routed to the profile page', () => {
    cy
      .get('header .header-links')
      .find('.link-button .profile-link')
      .click()
      
      .url().should('include', '/profile')
  })

  it ('should show the site header', () => {
    cy
      .get('header').should('be.visible')
      .find('.veg-share-title').should('contain', 'Garden Party')
  });

  it ('Should display the user\'s details',  () => {
    cy
      .get('.profile-page .user-details-container').should('be.visible')
      .find('img').should('have.class', 'profile-pic')

      .get('.profile-page .user-details-container')
      .find('.user-name').should('contain', 'Duckie')

      .get('.profile-page .user-details-container .user-details')
      .find('.location-container .user-location').should('contain', 'Boulder, CO')
  });

  it ('Should display all of the user\'s posts on their page by default',  () => {
    cy
      .get('.profile-page').should('be.visible')
      .find('.feed-container .feed-title').should('contain', 'My Posts')

      .get('.profile-page .feed-container .post-container')
      .find('.single-post').should('have.length', 2)
  });

  it ('Should enable a user to create a new post', () => {
    cy
      .get('.profile-page .feed-container .post-container')
      .find('.single-post').should('have.length', 2)

      .get('.profile-page').should('be.visible')
      .find('.feed-container .interactions-container')
      .get('.create-post-button')
      .click()

      .get('.form__create-post').should('be.visible')
      .get('.post__title-input[type=text]').type('Beets galore!')
      .get('.post__description-input[type=text]').type('3lbs of jumbo, rainbow beets available')
      .get('.post__image[type=text]').type('https://cdn.shopify.com/s/files/1/2550/8730/products/beet_rainbow_pixabay-cropped.progressive.jpg?v=1611685995')
      .get('.submit-post-button')
      .click()

      .get('.profile-page .feed-container .post-container')
      .find('.single-post').should('have.length', 3)
  })

  it ('should be able to navigate back to home', () => {
    cy
      .get('header .header-links')
      .find('.link-button .home-link').should('contain', 'Home')
      .should('have.attr', 'href', '/')
      .click()
  });
})