/* 
    1. Include the HTTP module
*/
const http = require('http');

/*
    7. Include the file system module
*/
const fs = require('fs');

/* 
    2. Create a server object
*/
// http.createServer((request,response) => {})
// allows us to create a server that can send back content to the client
// request - http object that represents incoming data (what you get from the client)
// response - http object that represents outgoing data (what you send back to the client)

// http.createServer((request, response) => {

//     // response.write - send a simple response to the client
//     response.write("HTTP Server Data! - Our First Server!!");

//     // response.end ends the response process
//     // without .end our request will hang/continuously load indefinitely
//     response.end();

// }).listen(3000)

/* 
    3. Handle alternate web page requests
*/

// const server = http.createServer((request, response) => {
//   // response.write("Server 2!")
//   // if you pass data into .end(), then .end() works as both .write() followed by a .end();
//   // response.end("Server 2 - no .write");

//   // we can uitilize the request.url to determine the text that we're serving to the client

//   // a / by itself represent the default page (so we can just use localhost:300 by itself)
//   if (request.url === "/") {
//     response.end("Home Page!");
//   } else if (request.url === "/about") {
//     // using "/about" a the end of our URL will send back the following instead
//     response.end("About Page!");
//   } else {
//     // can also serve html like so
//     response.end(`<h1>ERROR: 404 - Page Not Foun </h1> <a href = "/"> Return Home </a>`);
//   }
// });

/*
    5. Handling errors
*/

/*
    6. Respond to the client in JSON
*/

// const server = http.createServer((request, response) => {
//     // JSON data - must send back as a JSON string!! or else you will get an error when trying to send an object
//     response.end(JSON.stringify({ user: "user123", password: "123user"}))
// })

/*
    8. Respond to the client in HTML
*/

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', (error, page) => {
      if (!error) {
        // if nothing goes wrong with reading the .html file, send back the page
        res.end(page);
      } else {
        // something went wrong wtih reading the html file, can utilize our error variable
        // res.end(error.message)
        res.end('Error - 404!');
      }
    });
  } else if (req.url === '/about') {
    fs.readFile('./about.html', (error, page) => {
      if (!error) {
        res.end(page);
      } else {
        res.end('Error - 404!');
      }
    });
  } else {
    fs.readFile('./error.html', (error, page) => {
      if (!error) {
        res.end(page);
      } else {
        res.end('Error - 404!');
      }
    });
  }
});

// 8a. set up response to localhost:3000/

// 8b. read the index.html file

// 8c. if there is no index.html file

// 8d. set the metadata to reflect html file type

// 8e. write up the file being read

// 8f. end the response

/*
    9. Set up for localhost:3000/about
 */

// 9a. read the about.html file

// 9b. if there is no about.html file

// 9c. set the metadata to reflect html file type

// 9d. write up the file being read

// 9e. end the response

/*
    10. Set up for localhost:3000/anything-else
    */

// 10a. read the error.html file

// 10b. if there is no error.html file

// 10c. set the metadata to reflect html file type

// 10d. write up the file being read

// 10e. end the response

/* 
    4. Allow the server to begin listening for requests
*/
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
