// import your data

// write a getRandom function to get random elements from your arrays inside the helper folder and import it here

// set up your routes for jokes, albums, and errors

const http = require('http');
const fs = require('fs');

const getRandom = require('./helper/index');
const jokes = require('./data/jokes');
const albums = require('./data/albums');

// console.log(getRandom(albums))

const server = http.createServer((req, res) => {
  // jokes
  if (req.url === '/jokes') {
    res.end(getRandom(jokes));
    // albums
  } else if (req.url === '/albums') {
    res.end(JSON.stringify(getRandom(albums)));
    // error
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

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
