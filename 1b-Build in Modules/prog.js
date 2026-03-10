/*
    1. Use require() to import the os module
*/
// Operating Systems Module
const os = require("os");
/*
    4. Use require() to import the fs module
*/
// File System Module
const fs = require("fs");
/*
    11. Use require() to import the path module
*/

// Path Module
const path = require("path");

/*
    2. Check for the type of operating system
*/
// console.log(`My Operating System: ${os.type()}`)

/*
    3. Check for the amount of free memory (in bytes)
*/
// console.log(`Available Memory: ${os.freemem()}`)

// console.log(`Architecture: ${os.arch()}`)

/*
    5. Read the .txt files
*/
// fs.readFileSync("pathToFile", encoding)
// read files from directory synchronously
// blocking function - we need to wait for the entire file to finish reading before executing future code
// utf8/utf-8 - required encoding for english based text
const data = fs.readFileSync("./data.txt", "utf8");
// console.log(data)

const data2 = fs.readFileSync("./data2.txt", "utf8");
// console.log(data2)
// console.log(data2.toUpperCase())
// console.log(data2.split(" "))
/*
    6. Create a new file, use the .txt files as content
*/
// .writeFileSync("newFileName", "content")
// creates a new file with the specified content
fs.writeFileSync("newfile.txt", "File Content!");

const data3 = fs.readFileSync("./newfile.txt", "utf8");
// console.log(data3)

fs.writeFileSync("data4.txt", `${data}\n ${data2}\n${data3}`);

/*
    7. Read the new file to see if it works
*/

/*
    8. Leave a console log to demonstrate asyncronous timing
*/

/*
    9. Read data.txt and respond with it
*/

/*
    10. Leave another console log to demonstrate asyncronous timing
*/
// fs.readFile("fileName", encoding, callbackFn)
// asynchronous version of readFileSync
// error - if readFile ran into any errors
// result - data from file if no error occurred
// non-blocking - program will continue to run while file is being read
// very useful for large files!

// console.log("BEFORE")
// fs.readFile("./data4.txt", "utf8", (error, result) => {

//     // if there is no error, log the result
//     if(!error){ // same as !error === true, no need to put === true
//         console.log("Result: ")
//         console.log(result);
//     } else {
//         console.log("Error!")
//         console.log(error.message);
//     }

// })
// console.log("AFTER")

/*
A) BEFORE -> file -> AFTER
B) BEFORE -> AFTER -> file
C) AFTER -> file -> BEFORE

*/

/*
    12. Gather the relative file path of test.js
*/
// Relative Path - file path in relation to our current directory
// path.join(pathStrings) - gives us relative path to specified file
// if we wanted to access test.js from our current file inside 1b-built-in-modules, this is the path we would use
// console.log("Relative: ")
// const relativePath = path.join("newFolder", "test.js");
// console.log(relativePath)

/*
    13. Get the base file name from filePath
*/
// const baseFile = path.basename(relativePath);
// console.log("Base File: ")
// console.log(baseFile);

// const relativePath2 = path.join("newFolder", "folder2", "newFile2.txt");

// console.log(relativePath2)
// const baseFile2 = path.basename(relativePath2);
// console.log(baseFile2)

/*
    14. Check the absolute file path of this file
*/

// Absolute Path - full address of our path

// __dirname - absolute path of our current directory
console.log(__dirname);
// path.resolve(pathStrings) - same as path.join() for absolutePath
// const absolutePath = path.resolve("newFolder", "folder2", "newFile2.txt");
// console.log(absolutePath);

// fs.readdir - reads all files in a directory
fs.readdir(__dirname, (error, result) => {
  if (!error) {
    // array of all files/folders located in the designated path
    console.log(result);
  } else {
    console.log("error");
  }
});
