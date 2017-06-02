//*** read file




// var http = require('http');
// var fs = require('fs');
//
// http.createServer( (req,res) =>
// {
//   fs.readFile('file1.html', (err, data) =>
//   {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);






// ******New file
// The fs.appendFile() method appends specified content to a file. If the file
 // does not exist, the file will be created:


//
// var fs = require('fs');
//
// fs.appendFile('newfile' + (Math.round(Math.random()*1000) ), 'Hello content!', (err) =>
// {
//   if (err) throw err;
//   console.log('Saved!');
// });











//**** Open file for writing, if it does not exist, it is created, 'w' is for writing

// var fs = require('fs');
//
// fs.open('newfile2.txt', 'w', (err, file) =>
// {
//   if (err) throw err;
//   console.log('Saved!');
// });









// writeFile replaces specified file if it exists, if it doesn't, it will be created
// with the content






// var fs = require('fs');
//
// fs.writeFile('mynewfile3.txt', 'Hello content!', () =>
// {
//   if (err) throw err;
//   console.log('Saved!');
// });





// update files with appendFile
//Appends text to end of file

// var fs = require('fs');
//
// fs.appendFile('mynewfile2.txt', 'This is my text.', (err) =>
// {
//     if (err) throw err;
//     console.log('Updated!');
// });
//
//




//writeFile replaced the files content

// var fs = require('fs');
//
// fs.writeFile('mynewfile2.txt', "rando text yo", (err) =>
// {
//   if (err) {throw err};
//   console.log('replaced!');
// });




// var fs = require('fs');
//
// fs.unlink('mynewfile2.txt', (err) =>
// {
//   if (err) {throw err};
//   console.log('File deleted');
// });




// rename files



// var fs = require('fs');
//
// fs.rename('newfile2.txt', 'newfile2renamed.txt', (err) =>
// {
//   if (err) {throw err};
//   console.log('File renamed!');
// });
