const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM3')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

 parser.on('data', data => {
    console.log(data)
  });

function readSerial() {
console.log(parser)}