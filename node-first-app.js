// Writing to the console.
console.log("Hello world from NodeJS!");

// Writing to a file
const fs = require('fs');
fs.writeFileSync('Greetings.txt', 'Hello world from NodeJS!')