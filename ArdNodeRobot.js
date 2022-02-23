const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/cu.usbmodem14301', baudRate: 9600 })//change your port
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

var robot = require("robotjs");

// Move the mouse across the screen as a sine wave.
// Speed up the mouse.
// robot.setMouseDelay(2);
 
// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;
 
// for (var x = 0; x < width; x++)
// {
//     y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }



//serial read to emulator

  parser.on('data', data => {
  	// console.log(data)
    var dat=data.split(',')
    // console.log("A0= " + dat[0] + "," + " A1= " + dat[1]+ "," + " A2= " + dat[2] + "," + " D1= " + dat[3] + "," + " D2= " + dat[4] + "," + " D3= " + dat[5] )
   if (dat[3]=="1"){
    	console.log("a")
    	robot.keyTap("a");
    }
    if (dat[4]=="1"){
    	console.log("x")
    	robot.keyTap("x");
    }
    if (dat[5]=="1"){
    	console.log("d")
    	robot.keyTap("d");
    }
  });

