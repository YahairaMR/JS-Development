/*
    0a. In terminal, initialize the project:
    npm init -y
*/

/*
    0b. In terminal, install the express module using the following command:
    npm install express
*/

/*
    1. Import the express module, and prepare a ready-to-use variable for it
*/
const express = require('express');
const app = express(); // ready-to-use app variable - variable that will give us access to all of our express functions (REQUIRED!)

/*
    2. Set the Port we want to use
*/
const PORT = 3000;

/*
    4. Set up a response to localhost:3000/
*/
/*
setting up a GET route for our express server
if client connects to the specific route in the "path" (in this case "/", the default route), the code inside the callback function is then ran
app.get("path", (request, response) => {
    
})
    GET routes allow users to read data
*/
app.get('/', (request, response) => {
  // .send() - sending back strings to the user
  // .status(code) - determines the status code of your response
  /*
      200s - GOOD! (304 means continuous 200s)
      400s - bad! data has not been found, or is unauthorized, etc.
      500s - bad! generic server error - can use when 400s aren't suitable
    */
  console.log('route reached!'); // will print on server side when client accesses this route
  response.status(200).send("Our first express server! Isn't that cool!?!?");
});

/*
    nodemon - allows our server to continuously refresh upon making changes to our app and saving.  now, we don't have to continously stop and then restart the server manually!
    we installed nodemon globally with -g, meaning we only had to install it that one time to gain the nodemon command in our terminal.  we can run it for our node projects whenever!
*/

/*
    5. Set up a response to localhost:3000/about
*/
// our 2nd route
app.get('/about', (req, res) => {
  // default status code is 200, so no need to put it!
  res.send('About page!');
});

// help
app.get('/help', (req, res) => {
  res.send('Help Me!');
});

//object
app.get('/user', (req, res) => {
  // .json() - send back object data in JSON format
  res.json({ username: 'georgeExpress3000', email: 'george@express.com' });
});

/*
    6. Set up a response to localhost:3000/*
*/

// app.all("/{*any}")
// catch all route - if route cannot be found above, go here
app.all('/{*any}', (req, res) => {
  // 404 - not found
  res.status(404).send('<h1>404 - Page Not Found!</h1>');
});

/*
    3. Set the application to begin listening / begin spinning the server
*/
// just like our http server!
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
