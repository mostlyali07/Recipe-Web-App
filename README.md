# Recipe Web App
This is a web application that allows users to search for, save and share their favorite recipes. The app is built using the MERN (MongoDB, Express, React, Node.js) technology stack.
## Table of Contents

- [Recipe Web App](#Recipe-Web-App)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Technologies Used](#technologies-used)
  - [Contributors](#contributors)
  - [License](#license)

## Features
Search for recipes based on keyword, ingredients or cuisine.
View detailed recipe information including ingredients, directions, cooking time, and serving size.
Save favorite recipes to a personal collection for easy access.
Share recipes with friends and family via social media or email.
Rate and review recipes.
Create a shopping list based on selected recipes.
User authentication and authorization for secure access to personal collections and reviews.

## Installation
To install and run the application locally, follow these steps:

Clone the repository.
Install the necessary dependencies by running npm install in the root directory and npm install in the client directory.
Create a .env file in the root directory and add your MongoDB connection string and JWT secret key. For example:
makefile
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
Start the server by running npm run server in the root directory.
Start the client by running npm start in the client directory.
Open your browser and go to http://localhost:3000 to view the application.
## API Endpoints
The application includes the following API endpoints:

GET /api/recipes - returns a list of all recipes.
GET /api/recipes/:id - returns details for a specific recipe.
POST /api/recipes - creates a new recipe.
PUT /api/recipes/:id - updates an existing recipe.
DELETE /api/recipes/:id - deletes a recipe.
POST /api/users/register - creates a new user.
POST /api/users/login - logs in a user and returns a JWT token.
GET /api/users/profile - returns user profile information.
## Technologies Used
- MongoDB - document-oriented database used for storing recipe and user data.
- Express - web application framework used for building the server-side API.
- React - JavaScript library used for building the client-side user interface.
- Node.js - JavaScript runtime used for running the server-side API.
- Bootstrap - CSS framework used for styling the application.
- JWT - JSON Web Tokens used for user authentication and authorization.

## Contributors
Ali Rehan - [Github's Account](https://github.com/mostlyali07/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
