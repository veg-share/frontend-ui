# Garden Party Frontend UI

[Garden Party](https://gardenparty.vercel.app/) is a Progressive Web Application (PWA) that allows home gardeners to find and share surplus harvest with their community. A user can create a post with a title, description, and image, as well as search posts from all users.

This project was built by a team of five software engineers at the [Turing School of Software & Design](https://turing.edu/). It is composed of a frontend application built with React and a backend application built using Ruby on Rails and GraphQL. Here is the spec sheet that guided this project: [Spec](https://mod4.turing.edu/projects/capstone.html), and our initial wireframes and design inspiration: [Wireframe](https://miro.com/app/board/o9J_lLCjO7g=/).

View the deployed app [here](https://gardenparty.vercel.app/).

Check out the backend repository [here](https://github.com/veg-share/backend-api).

![screenshot of home page](https://user-images.githubusercontent.com/69813722/115750499-770fbd80-a355-11eb-846f-995d3b4f9245.png)
![screenshot of profile page](https://user-images.githubusercontent.com/69813722/115750701-b0482d80-a355-11eb-9417-d59144d50bae.png)

## Frontend Contributors

- Allison Dietz: [github.profile](https://github.com/dietza)
- Cole Fiscus: [github profile](https://github.com/colefiscus)
- Christina Cook: [github profile](https://github.com/christina-cook)

## Table of Contents
1. [Using the App](#using-the-app)
2. [Challenges and Wins](#challenges-and-wins)
3. [Tech Stack](#tech-stack)
4. [Future Iterations](#future-iterations)

## Using the App

**To use the deployed app:**
- Visit the deployed site [here](https://gardenparty.vercel.app/)
- An option to install the app as a PWA should appear in the URL bar or as a pop-up on a mobile device. If not, you may have to look in your browser’s options menu to install the app.

**To add more features to this project, or to simply view the code in action:**
1. Clone this repository (or first fork it and then clone) using git clone ```git@github.com:veg-share/frontend-ui.git [OPTIONAL DIRECTORY NAME]``` inside of your terminal.

2. Install any necessary dependencies using ```npm install```.

3. Start the server ```npm start``` or open the code in your text editor.

4. The app should open automatically, but you can also navigate to [http://localhost:3000](http://localhost:3000) to view the app in the browser (a PWA can not be installed in development mode).

5. To start the Cypress test suite, enter ```npm run cypress```from the project directory.

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
