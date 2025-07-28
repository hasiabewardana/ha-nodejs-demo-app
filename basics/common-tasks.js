/* fs (File System): Read/write files. */
// Imports the Promise-based API of Node.js’s built-in fs (file system) module.
const fs = require('fs').promises;

// Declares an asynchronous function named readFile.
async function readFile() {
  try {
    const data = await fs.readFile('Greetings.txt', 'utf8'); // Functions marked with async can use the await keyword to pause execution until Promises resolve. 'utf8' tells Node to interpret the file contents as text, not binary.
    console.log(data);
  }
  catch (err) {
    console.error('Error reading file: ', err.message)
  }
}

// Calls the readFile function to start the process.
readFile();

/* path: Handle file paths across operating systems. */
// This module provides utilities for working with file and directory paths.
const path = require('path');

// Cross-platform path
// __dirname: a global variable in Node.js that gives the absolute path to the current file’s directory.
// path.join(...): safely joins all parts into one path using the correct separator
console.log(path.join(__dirname, 'data', 'Sample.txt'));

/* http/https: Build servers or make HTTP requests.
   events: Create custom event emitters. */
// This module provides the EventEmitter class, used for implementing event-driven programming.
const EventEmitter = require('events');

// This object can now emit events and listen to events.
const myEmitter = new EventEmitter();

// Registers an event listener for the custom event named 'event'.
// The provided function will run every time 'event' is emitted.
myEmitter.on('event', () => console.log('Event triggered!'));

// Emits (triggers) the 'event', which causes all associated listeners to be called.
myEmitter.emit('event');