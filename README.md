# Shopify Movie Awards Challenge
This is a personal project for shopify fall 2021 frontend internship. The app is designed to simulate movie awards, allowing users to search for their favorite movies using the OMDB movie api (api docs: http://www.omdbapi.com/) and nominate up to 5 movies for the awards. 

# Getting started

You can start this app by cloning down the repository, do this with:

    git clone git@github.com:KevJSDevelopment/Shopify-Movie-Awards.git

Once the app is cloned down you should install dependencies running either:

    npm install

or

    yarn

Once you install dependencies, you can start your app. ($ yarn start or $ npm start)
The website is also hosted on gh-pages: https://kevjsdevelopment.github.io/Shopify-Movie-Awards/

# Navigating the app
Once you visit the link you can begin searching for movies & nominating your favorites.

As soon as you have nominated your top 5 movies you will be directed to a results page that allows you to see current nomination results, currently you are able to click the 'nominate again' to submit more nominations if you would like

# How it was built

To create this app I used a React JS along with Material ui for styling & themes on the frontend. 

Nomination results were saved using a ruby on rails with postgresDB for the backend. The backend is currently being hosted on heroku.
