const { v4: uuid } = require("uuid");

let musicians = [
  {
    id: uuid(),
    name: "Carson Pace",
    age: 29,
  },
  {
    id: uuid(),
    name: "Anthony Green",
    age: 42,
  },
  {
    id: uuid(),
    name: "Lizzy McAlpine",
    age: 25,
  },
  {
    id: uuid(),
    name: "Yvette Young",
    age: 33,
  },
];

module.exports = musicians;
