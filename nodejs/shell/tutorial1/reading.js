#!/usr/bin/env node


var fs = require('fs');


// doesn't load whole file or block execution thread

fs.readFile('/etc/passwd', (err, data) =>
{
  if (err) throw err;
  console.log(data);
});




//load whole file before anything else

var contents = fs.readFileSync('my_file.txt', 'utf8')
console.log(contents);
