/// Your Code Here
// takes in an array
// get a random item back

const getRandom = (array) => {
  //randomIndex 0 - array.length-1
  let randomIndex = Math.floor(Math.random() * array.length);

  // return random element
  return array[randomIndex];
};

module.exports = getRandom;
