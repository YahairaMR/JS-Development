const subways = require('./data/fixture');
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send(subways);
});

app.get('/red', (req, res) => {
  res.status(200).send(subways.redLine);
});

app.get('/green', (req, res) => {
  res.status(200).send(subways.greenLine);
});

app.get('/:subway', (req, res) => {
  //search through all of the trains in both arrays, get back ones with 1

  const subwayNumber = req.params.subway;
  // console.log(`subwayNumber: ${subwayNumber}`)

  const bothTrains = subways.redLine.concat(subways.greenLine); // combine red and green lines

  const trains = bothTrains.filter(
    (t) => t.train.includes(subwayNumber), //give us all trains that have a "1" in the array
  );

  //   const trains = [];

  //   for (let t of subways.redLine.concat(subways.greenLine)) {
  //     if (t.train.includes("1")) {
  //       trains.push(t);
  //     }
  //   }

  //   for (let t of subways.greenLine) {
  //     if (t.train.includes("1")) {
  //       trains.push(t);
  //     }
  //   }

  res.status(200).send(trains);
});

app.all('/{*any}', (req, res) => {
  res.status(404).send('<h2>The MTA is currently working to complete this application soon. Thank you for your patience</h2>');
});

app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
});
