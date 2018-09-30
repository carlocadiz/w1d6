 const argv = process.argv.slice(2);
 const myArgv = argv.toString();
 console.log(myArgv);

const fs = require("fs");

// Asynchronous read
fs.readFile(myArgv, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

