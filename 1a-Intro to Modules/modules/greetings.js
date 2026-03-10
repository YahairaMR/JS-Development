const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

const sayGoodbye = (name) => {
  console.log(`Goodbye, ${name}`);
};

// to export multiple functions at a time, use {}
module.exports = { sayHello, sayGoodbye };
