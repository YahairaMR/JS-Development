// async/await
// used for asynchronous programming
// if you define a function as async in JS, you gain access to the await keyword
// await lets you wait on a Promise until it finishes running

const { reject } = require('async');

// Promise - a Promise represents the eventual success or failure of an asynchronous function

// https://dummyjson.com/users

// https://dummyjson.com/users/1

// const fetchUser = async () => {
//     const response = await fetch("https://dummyjson.com/users/1")
//     const data = await response.json();

//     console.log(data.firstName)
// }

// fetchUser();

const orderFood = async () => {
  // creating our promise, our OWN asynchronouns code that we need to wait on
  let myOrder = new Promise((resolve, reject) => {
    console.log('placing order');
    // setTimeout (callbackFn, timeInMilliseconds)
    setTimeout(() => {
      return resolve({
        pizza: 1,
        soda: 1,
      });
    }, 5000);
  });

  let orderReceipt = await myOrder;
  console.log(orderReceipt);
};

orderFood();
