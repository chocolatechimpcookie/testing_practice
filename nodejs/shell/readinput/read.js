#!/usr/bin/env node
// http://st-on-it.blogspot.com/2011/05/how-to-read-user-input-with-nodejs.html



//process.stdin.resume() initializes  stdin
// stdin.on will fire everytime the user presses enter



// process.stdin.resume();
// process.stdin.setEncoding('utf8');
//
// process.stdin.on('data', (chunk) =>
// {
//     process.stdout.write('data: ' + chunk);
// });




// this one uses once which detaches the listener after the first event received
//trim takes out the trailing new line after the user presses enter, toString
//  runs their input into a real string

//process.exit() after question so the script is not stuck


function ask(question, format, callback)
{
  var stdin = process.stdin, stdout = process.stdout;

  stdin.resume();
  stdout.write(question + ": ");

  stdin.once('data', (data) =>
  {
    data = data.toString().trim();

    if (format.test(data))
    {
      callback(data);
    }
    else
    {
      stdout.write('It should match: ' + format + "\n");
      ask(question, format, callback);
    }
  });
}



// whats the second arg?

// ask("Name", /.+/, (name) =>
// {
//   ask("Email", /^.+@.+$/, (email) =>
//   {
//     console.log("Your name is: ", name);
//     console.log("Your email is:", email);
//
//     process.exit();
//   });
// });




// this won't work since its async, it waits

// var name = ask("Name", /.+/, (name) =>  {  return name; process.exit(); });
//
// console.log("Your name is: ", name);

//
// ask("Email", /^.+@.+$/, (email) =>
// {
//   console.log("Your email is:", email);
//
//   process.exit();
// });
