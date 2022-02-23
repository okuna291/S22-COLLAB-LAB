// const SerialPort = require('serialport')
// const Readline = require('@serialport/parser-readline')
// const port = new SerialPort('/dev/cu.usbmodem14301')

// const parser = port.pipe(new Readline({ delimiter: '\r\n' }))


//  parser.on('data', data => {
//     // console.log(data)
//   });

// function readSerial() {
// console.log(parser)}
// import { Client } from 'node-osc';

// const client = new Client('127.0.0.1', 3333);
// client.send('/oscAddress', 200, () => {
//   client.close();
// });
////or  the below

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

// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')
// const port = new SerialPort({ path: '/dev/cu.usbmodem14301', baudRate: 9600 })

// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// parser.on('data', console.log)