z; // try {
//     // error
//     // consoole.log("Testing!")

//     // error
//     // const num = 10;
//     // num = 15;

//     let array = [1,2,3,4,5]
//     // undefined, but no error so no catch block
//     console.log(array[5])
// } catch (error) {
//     console.log("Error!")
//     console.log(error.message)
// }

// line will only run because our try catch is handling the error.
// without our try catch, the above error would stop the program from running before this line is reached
// console.log("Continuing the program");

// try {
//   consolelog('test');
// } catch (error) {
//   console.log('ERROR');
// } finally{
//     // doesn't matter if code failed or succeeded
//     // console.log('finally!)
// }

// console.log('outside finally')

// Custom Errors - developer defined errors that you can integrate with your try catch blocks

const password = 'woww';

// throw allows us to create custom error messages
try {
  if (password.length < 4) {
    throw 'Password Must Be At Least 4 Characters';
  }
  if (!password.includes('!')) {
    throw "Password Must Include '!'";
  }
  console.log('Successfully created password!');
} catch (error) {
  console.log(error);
}
