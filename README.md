# Shopify Movie Awards Challenge
This is a personal project for shopify summer 2021 frontend internship. The app is designed to simulate movie awards, allowing users to search for their favorite movies using the OMDB movie api (api docs: http://www.omdbapi.com/) and nominate up to 5 movies for the awards. 

# Getting started

The website is currently hosted on gh-pages: https://kevjsdevelopment.github.io/Shopify-Movie-Awards/

Once you visit the link you can begin searching for movies & nominating your favorites.

As soon as you have nominated your top 5 movies you will be directed to a results page that allows you to see current nomination results, currently during testing you are able to click the 'nominate again' to submit more nominations

notes:
    The backend of the application is hosted on heroku, which can occasionally have a slow startup. So if you don't initially see nomination results after you completed your nominations simply refresh the page & the server should have connected by then.

# How it was built

To create this app I used a React JS along with Material ui for styling & themes on the frontend. 

Nomination results were saved using a ruby on rails with postgres DB for the backend. The backend is currently being hosted on heroku.
