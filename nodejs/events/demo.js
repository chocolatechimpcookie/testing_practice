var events = require('events');
var eventEmitter = new events.EventEmitter();


//create an event handler

var myEventHandler = () =>
{
  console.log('I hear a scream');
}


// assign event handler to an event
eventEmitter.on('scream', myEventHandler);

// fire event
eventEmitter.emit('scream');
