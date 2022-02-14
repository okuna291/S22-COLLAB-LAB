const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM3') //change to your port
var ks = require('node-key-sender');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

  parser.on('data', data => {
  	// console.log(data)
    var dat=data.split(',')
    // console.log("A0= " + dat[0] + "," + " A1= " + dat[1]+ "," + " A2= " + dat[2] + "," + " D1= " + dat[3] + "," + " D2= " + dat[4] + "," + " D3= " + dat[5] )
   if (dat[3]=="1"){
    	console.log("a")
    	 ks.sendKey("@65");
    }
    if (dat[4]=="1"){
    	console.log("x")
    	 ks.sendKey('x');
    }
    if (dat[5]=="1"){
    	console.log("d")
    	 ks.sendKey('d');
    }
  });

