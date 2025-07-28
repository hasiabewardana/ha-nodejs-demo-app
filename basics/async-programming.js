// Callbacks: Older style, can lead to “callback hell.”
/* const fs = require('fs');
fs.readFile('Greetings.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); */

// Promises
/* const fs = require('fs').promises;
fs.readFile('Greetings.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err)); */

// Async/Await (Preferred)
const fs = require('fs').promises
async function readFile() {
    try {
      const data = await fs.readFile('Greetings.txt', 'utf8');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  readFile();