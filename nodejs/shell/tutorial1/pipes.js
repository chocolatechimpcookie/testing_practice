#!/usr/bin/env node

// to run:
// chmod +x pipes.js
// echo 'hello world' | ./pipes.js


// don't need require for process

var readInput = (callback) =>
{
  var input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () =>
  {
    var chunk = process.stdin.read();
    if(chunk !== null)
    {
      input += chunk;
    }
  });

  process.stdin.on('end', () =>
  {
    callback(input);
  });
}

var initScript = (input) =>
{
  console.log(input);
}

readInput(initScript);
