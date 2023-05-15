# Car data

## How to run the server

### Installation

Use the following command to download all the dependencies:

"npm install"

This command will read the package.json file and install all the required packages listed there. Make sure you have Node.js and npm installed on your machine.

### Usage

To run the server in development mode, use the following command:

"npm run dev"

This command will start the server using the configured script in the package.json file. It may include additional tasks like transpiling code or restarting the server on file changes.

## Overview
In this coding challenge, I had the opportunity to learn and work with Node.js and Express for the first time. 
Using my newly acquired skills, I successfully built a RESTful API using Express and CORS. The API provides users with the ability to access information about cars and add new cars to our database via HTTP requests. Specifically, the API supports GET requests to retrieve information about all cars or a specific car by ID, and POST requests to add new cars to the database.
To implement this functionality, I used the cars.json file as the initial database and included error handling to prevent the addition of duplicate car names or non-existent car IDs. Additionally, I incorporated middleware to handle JSON data sent from the client.

## Improvement 

While I was able to successfully implement the GET and POST methods, I was not able to include the PATCH and DELETE methods due to time constraints and a limited understanding of their implementation. However, I plan to continue learning and improving my skills in these areas in order to enhance the functionality and usability of my future projects.


