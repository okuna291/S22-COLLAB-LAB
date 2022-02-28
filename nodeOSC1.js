
//https://npm.io/package/osc-emitter
var OscEmitter = require('osc-emitter')
  , emitter = new OscEmitter();

emitter.add('localhost', 7400);

emitter.emit('/foo', 1, 2, 3);
emitter.emit('/bar', 'hello', 'world');



//https://npm.io/package/osc-receiver
var OscReceiver = require('osc-receiver')
  , receiver = new OscReceiver();

receiver.bind(7400);

receiver.on('/foo', function(a, b, c) {
  // do something.
  console.log(a)
});

receiver.on('/bar', function(x, y) {
  // do something.
});

receiver.on('message', function() {
  // handle all messages
  var address = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
});
