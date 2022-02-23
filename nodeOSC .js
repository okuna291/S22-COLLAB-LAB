const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.usbmodem14301')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

 parser.on('data', data => {
    // console.log(data)
  });

function readSerial() {
console.log(parser)}



///sending
const client = new Client('127.0.0.1', 3333);
client.send('/oscAddress', 200, () => {
  client.close();
});

///listening
var oscServer = new Server(3333, '127.0.0.1', () => {
  console.log('OSC Server is listening');
});

oscServer.on('oscAddress', function (msg) {
  console.log(`Message: ${msg}`);
  oscServer.close();
});

////or  the below


// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')
// const port = new SerialPort({ path: '/dev/cu.usbmodem14301', baudRate: 9600 })

// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// parser.on('data', console.log)