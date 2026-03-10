const sayName = (name) => {
  console.log(`Hi, my name is ${name}!`);
};

// sayName("Otto");

// module.exports
// use module.exports to allow other files to access your specified functions/variables
// module.exports = functionName
module.exports = sayName;
