const subways = require('./data/fixture');

const express = require('express');
const app = express();

const bothLines = subways.redLine.concat(subways.greenLine);

app.get('/', (req, res) => {
  res.json(subways);
});

app.get('/red', (req, res) => {
  res.json(subways.redLine);
});

app.get('/green', (req, res) => {
  res.json(subways.greenLine);
});

app.get('/local', (req, res) => {
  // const results = [];

  // for(let i = 0; i < bothLines.length; i++){
  //     // check if train includes 1 or 6
  //     if(bothLines[i].train.includes("1") || bothLines[i].train.includes("6")){
  //         results.push(bothLines[i])
  //     }
  // }

  // filter
  const results = bothLines.filter((subway) => {
    return subway.train.includes('1') || subway.train.includes('6');
  });

  res.json(results);
});

app.get('/express', (req, res) => {
  const results = bothLines.filter((subway) => {
    return subway.train.includes('2') || subway.train.includes('3') || subway.train.includes('4') || subway.train.includes('5');
  });

  res.json(results);
});

// Dynamic Parameters
// parameters included inside the URL
// we set them up with :parameterName
app.get('/:subwayNum', (req, res) => {
  // access dynamic parameters utilizing request.params.parameterName
  const num = req.params.subwayNum;
  console.log(num);

  // just use redline

  // keep track of all the trains with "1"

  // const results = [];
  // can still push into a const!!!
  // all const means is that we can't reassign the variable
  // results.push("new stuff!")

  // for(let i = 0; i < subways.redLine.length; i++){
  //     // check if the current object's train array includes a "1"
  //     if(subways.redLine[i].train.includes("1")){
  //         results.push(subways.redLine[i]);
  //     }
  // }

  // always keep in mind that for of/.forEach are available to you if you need to go through every item in the array!
  // a regular for loop will also get the job done of course, but the code will likely be a bit cleaner with one of the other options

  // for of
  // for(let subway of subways.redLine){
  //     if(subway.train.includes("1")){
  //         results.push(subway)
  //     }
  // }

  // forEach
  // subways.redLine.forEach((subway) => {
  //     if(subway.train.includes("1")){
  //         results.push(subway)
  //     }
  // })

  // .filter
  // return a condition
  // if the item in the array meets that condition, add it to the resulting list
  // if not, then exclude it

  // const results = subways.redLine.filter((subway) => {
  //    return subway.train.includes("1");
  // })

  // .concat - combines 2 arrays
  // bothArrays = array1.concat(array2)

  // implicit return
  // if you have an arrow function and all it does is return, you can get rid of the keyword "return" and the {} and return implictly like such:
  const results = bothLines.filter((subway) => subway.train.includes(num));

  res.json(results);
});

app.all('/{*any}', (request, response) => {
  response.status(404).send('The MTA is currently working to complete this application soon. Thank you for your patience');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
