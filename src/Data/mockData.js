export const posts = [
  {
    userID: 2,
    username: 'Betsy',
    title: 'Too many carrots!',
    id: 100,
    date: 'June 12, 2020',
    description: '9 carrots, all are good condition.',
    location: 'Denver, CO',
    distance: '~3.4 miles',
    image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    userID: 1,
    username: 'Jimmathy',
    title: 'Too many pototoes!',
    id: 101,
    date: 'April 10, 2021',
    description: '33 potatoes, most are good condition.',
    location: 'Longmont, CO',
    distance: '~1.2 miles',
    image: 'https://images.unsplash.com/photo-1573196444577-af471298e034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
  },
  {
    userID: 3,
    username: 'Jetski',
    title: 'Too much basil!',
    id: 102,
    date: 'February 12, 2021',
    description: '2 lb of basil, all in good condition.',
    location: 'Broomfield, CO',
    distance: '~5.1 miles',
    image: 'https://images.unsplash.com/photo-1500420254515-0faefa2dac99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    userID: 2,
    username: 'Betsy',
    title: 'Too many onions!',
    id: 103,
    date: 'March 17, 2021',
    description: '4 onions, all are good condition.',
    location: 'Denver, CO',
    distance: '~3.4 miles',
    image: 'https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }
]

export const user = {
  name: 'Duckie',
  id: 2,
  location: 'Boulder, CO',
  bio: 'Just a small-town girl, livin in a lonely wooorld.',
  numberOfShares: 5,
  posts: [
    {
      userID: 2,
      user: {
        username: 'Duckie'
      },
      title: 'Too many onions!',
      id: 104,
      date: 'June 20, 2020',
      description: '4 onions, all are good condition.',
      location: 'Denver, CO',
      distance: '~3.4 miles',
      image: 'https://images.unsplash.com/photo-1467019972079-a273e1bc9173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      userID: 2,
      user: {
        username: 'Duckie'
      },
      title: 'Too many carrots!',
      id: 105,
      date: 'August 5, 2020',
      description: '9 carrots, all are good condition.',
      location: 'Denver, CO',
      distance: '~3.4 miles',
      image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
  ]
}
