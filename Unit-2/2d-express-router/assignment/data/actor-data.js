const { v4: uuid } = require("uuid");

let actors = [
  {
    id: uuid(),
    name: "Nathan Fielder",
    age: 42,
  },
  {
    id: uuid(),
    name: "Emma Stone",
    age: 36,
  },
  {
    id: uuid(),
    name: "Aaron Paul",
    age: 45,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
  },
];
// console.log(actors);

module.exports = actors;
