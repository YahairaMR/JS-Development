const chalk = require('chalk');
const prompt = require('prompt-sync')({ sigint: true });
const figlet = require('figlet');
const _ = require('lodash');
const { faker } = require('@faker-js/faker');
const dayjs = requiere('dayjs');

// console.log(`${chalk.red.bgBlue('Hello')} ${chalk.blue.bgRed.strikethrough('World')}!!`);

// // console.log("Enter your password: ")
// // let promptStr = prompt("> ", {echo: ""});
// // console.log(promptStr)

// // figlet (text, font-object, callback)
// figlet('Express!', { font: 'Slant' }, (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

const array = [5, 17, 14, 32, 100, 90, 87, 45, 50, 32];

// _.shuffle - randomizes an array (does not modify original)
// console.log(_.shuffle(array));
// console.log(array);

// _.sample - gets random element from array (no Math.random()required!)
// console.log(_.sample(array));

// _sampleSize(array,n) - gets back n radom items from the array
// console.log(_.sampleSize(array, 3));

// const duplicateArray = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 10];
// // _.uniq() - remove duplicate from array (keeps only the first occurence of an element)
// console.log(_.uniq(duplicateArray));

const users = [
  { username: 'fusion403', age: 45 },
  { username: 'neutron543', age: 26 },
  { username: 'vortex900', age: 24 },
  { username: 'comet786', age: 40 },
];

// _.sortBy(array, "property") - sorts objects based on given property
// age descending order - user .reverse() for descending

// sort By Age
// console.log(_.sortBy(users, "age"));

// sort by username
// console.log(_.sortBy(users, 'username'));

// age descending order
// console.log(_.sortBy(users, 'age').reverse());

// _.groupBy() - goups items in your array together based on criteria
// a nested object is created with properties (keys) that correspond to categories and arrays (values) of the elements that fit into the category
const organizeByAge = _.groupBy(users, (user) => {
  if (user.age > 30) {
    // property that the users with age over 30 will be grouped into
    return 'over30';
  } else {
    return 'underOrEquealTo30';
  }
});
// console.log(organizeByAge);

// can also specify the property name in a string and it will groupBy that as well!
const organizeByUsernameLength = _.groupBy(users, 'username.length');
// console.log(organizeByUsernameLength)

const str = 'Helllo World and Express! 123';

// console.log(_.capitalize(str));

// console.log(_.camelCase(str));

// console.log(_.kebabCase(str))

// console.log(_.snakeCase(str));

// console.log(_.repeat('yay', 10));

// _.words - splits string into words, ignoring all symbols

// console.log(_.words(str))

const newUser = {
  name: 'George Express',
  age: 25,
  city: 'NYC',
  email: 'george@express.com',
  id: 101,
  password: 'george-express1000',
};

// _.pick(object,['properties']) - picks properties from an object that you want and places them into a new object
// console.log(_.pick(newUser, ['name', 'email', 'id']));

// _.omit(object, ['properties']) - excludes certain properties from an object
// console.log(_.omit(newUser, ['id', 'email', 'password']));

// _.keys - creates an array of keys from a given object
// console.log(_.keys(newUser))

// _.values - creates an array of values from a given object
// console.log(_.values(newUser))

const scores = [90, 100, 85, 90, 75, 98];
// console.log(_.mean(scores));

// console.log(_.sum(scores))

// _.random(a,b) - returns random number between a range (inclusive, includes possibility of both a and b)
// console.log(_.random(20, 30));

console.log(`Random username: ${faker.internet.username()}`);

// function to create random user
const createRandomUser = () => {
  return {
    username: faker.internet.username(),
    userId: faker.string.uuid(),
    city: faker.location.city(),
    favoriteAnimal: faker.animal.type(),
    birthday: faker.date.birthdate(),
  };
};

// console.log(createRandomUser());

// faker .helpers.multiple(function that generates fake data, {count: n }) create multiple fake users
// const randomUsers = faker.helpers.multiple(createRandomUser, { count: 5 });

// console.log(randomUsers);

// dayjs
// console.log(dayjs("2026-01-10").format("MM/DD/YYYY"))

// returns current day
const today = dayjs();
// console.log(today);
console.log(today.format('MM/DD/YYYY'));

const tomorrow = today.add(1, 'day').add('2', 'year');
console.log(tomorrow.format('MM/DD/YYYY'));

const yesterday = today.subtract(1, 'day');
console.log(yesterday.format('MM/DD/YYYY'));

// Month (abbreviated) Day, Year
console.log(today.format('MMM D, YYYY'));
