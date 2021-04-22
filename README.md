# Garden Party Frontend UI

Garden Party is a Progressive Web Application (PWA) that allows home gardeners to find and share surplus harvest with their community. A user can create a post with a title, description, and image, as well as search posts from all users.

This project was built by a team of five software engineers at the [Turing School of Software & Design](https://turing.edu/). It is composed of a frontend application built with React and a backend application built using Ruby on Rails and GraphQL.

View the deployed app [here](https://gardenparty.vercel.app/).

Check out the backend repository [here](https://github.com/veg-share/backend-api).

## Frontend Contributors

- Allison Dietz: [github.profile](https://github.com/dietza)
- Cole Fiscus: [github profile](https://github.com/colefiscus)
- Christina Cook: [github profile](https://github.com/christina-cook)

## Table of Contents
1. [Instructions](#set-up-instructions)
2. [How-To](#using-the-app)
3. [Challenges and Wins](#challenges-and-wins)
4. [Tech Stack](#tech-stack)
5. [Future Iterations](#future-iterations)

## Set-Up Instructions
1. Clone the repository
```git@github.com:veg-share/frontend-ui.git```

2. Install dependencies
```npm install```

3. Start the server
```npm start```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

5. Start the test suite
```npm run cypress```

## Using the App

## Challenges and Wins 

**Challenges:**
- Setting up continuous integration / continuous deployment; trying to deploy our app to Heroku through TravisCI while also integrating Cypress testing turned out to be more trouble than it was worth. After running into so many roadblocks we transitioned to another deployment site.
- Too much focus on our individual repos and not enough focus on communication between frontend and backend teams set us up for differing expectations on data structure.
- Learning how to use graphQL effectively on the frontend.

**Wins:**
- Achieving continuous deployment / continuous integration on the frontend repo using Vercel.com and GitHub Actions to check for deployment status and passing Cypress tests.
- Creating a PWA that successfully installs on a mobile device.
- Retrieving and displaying data from the backend server using graphQL queries.

## Tech Stack 
We used a combination of the following technologies/tools:
* React 
* React Router
* JavaScript
* Apollo Client
* TravisCI
* CSS
* Tested with Cypress
* GitHub Projects

## Future Iterations
- Pagination for the data being retrieved from the backend server so that only 10-20 posts appear at a time on the main feed.
- Integrating image functionality - be able to retrieve image files from active storage on the backend as well as being able to upload an image taken from a mobile device.
- Increase the post functionality for the user - let a user post to the backend server including location, tags, etc.
- Add location services - integrate a geolocation API so that only posts within a certain distance appear in the user’s feed. Also update the search function so that a user can change the area they want to look in.
- Add use of the tags included in the data - let a user see more related info about the posts.
