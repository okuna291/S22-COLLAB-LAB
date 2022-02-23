const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.usbmodem14301')
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

  parser.on('data', data => {
  	// console.log(data)
    var dat=data.split(',')
    console.log("A0= " + dat[0] + "," + " A1= " + dat[1]+ "," + " A2= " + dat[2] + "," + " D1= " + dat[3] + "," + " D2= " + dat[4] + "," + " D3= " + dat[5] )
  });

