describe('Garden Party, main page view', () => {
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

      .get('.home-view .feed-container .post-container')
      .find('.single-post').should('have.length', 350)
  });

  it ('Should display user interactions on the home page',  () => {
    cy
      .get('.home-view').should('be.visible')
      .find('.feed-container .interactions-container').should('be.visible')
      .find('.search').should('be.visible')

      .get('.home-view').should('be.visible')
      .find('.feed-container .interactions-container')
      .find('.create-post-button').should('be.visible')
  });
  
  it ('Should be able to search posts by type of veg offered', () => {
    cy
    .get('.interactions-container .search .search-bar[type=text]')
    .type('carrot')
    .get('.interactions-container .search .search-button')
    .click()
    
    .get('.home-view .feed-container .post-container')
    .find('.single-post').should('have.length', 14)
    
    .get('.interactions-container .search .clear-button')
    .click()
    .get('.home-view .feed-container .post-container')
    .find('.single-post').should('have.length', 350)
    
    .get('.interactions-container .search .search-bar[type=text]')
    .type('tomato')
    .get('.interactions-container .search .search-button')
    .click()
    
    .get('.home-view .feed-container .post-container')
    .find('.single-post').should('have.length', 4)
  })
  
  it ('Should toggle the form to create a new post',  () => {
    cy
      .get('.home-view').should('be.visible')
      .find('.feed-container .interactions-container')
      .get('.create-post-button')
      .click()
      .get('.form__create-post').should('be.visible')
  });
})