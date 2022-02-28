// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')
// const port = new SerialPort({ path: '/dev/cu.usbmodem14301', baudRate: 9600 })
// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))


const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.usbmodem14301')
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))

var emitterIP1="localhost"
var emitterPort1=7400
var emitterIP2="192.168.0.238"
var emitterPort2=7000


// parser.on('data', console.log)
var OscEmitter = require('osc-emitter')
var emitter = new OscEmitter();
emitter.add(emitterIP1, emitterPort1);

var emitterUnity = new OscEmitter();
emitterUnity.add(emitterIP2, emitterPort2);

var OscReceiver = require('osc-receiver')
var receiver = new OscReceiver();
receiver.bind(7400);

var map = require('map-range');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var name="ayo"
var msString="hello"

var mapped0_360 = map(linear, 0, 1023, 0, 360);
var mapped1_5 = map(linear, 0, 1023, 1, 5);
var mappedXY = map(linear, -100, 100, 0, 255);

app.use('/', express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/cats', (req, res) => {
  res.send('<img src="https://i.pinimg.com/originals/58/b1/80/58b180bcba5a92d7d95c58153c9ce5b2.png">');
});

app.get('/dogs', (req, res) => {
  res.send('<img src="https://www.science.org/do/10.1126/science.abi5787/abs/main_puppies_1280p.jpg">');
});

app.get('/catdogcat', (req, res) => {
  res.send('<img src="https://nypost.com/wp-content/uploads/sites/2/2020/03/031120-cute-animals-anti-corona-01.jpg?quality=80&strip=all">');
});

io.on('connection', (socket) => {
  console.log("connected")

  socket.on('fromclient', (data) => {
    console.log(data);
  });

parser.on('data', data => {
   // console.log(data)
    var dat=data.split(',')
socket.emit("toclient", { r: dat[0], g: dat[1],b: dat[2], x: dat[3], y: dat[4], z: dat[5] });
emitter.emit('/vals', dat[0],dat[1],dat[2],dat[3],dat[4],dat[5]);
emitter.emit("/"+name,  msString, dat[0],dat[1],dat[2],dat[3],dat[4],dat[5]);
emitterUnity.emit("/example/3/rotate", 0.0,0.0,mapped0_360(dat[1]));
emitterUnity.emit("/example/3/scale", mapped1_5(dat[2]),mapped1_5(dat[2]),mapped1_5(dat[2]));
// emitterUnity.emit("/example/3/rotate/", 0.0,0.0, mapped(dat[0]));
console.log(mapped1_5(dat[2]).toFixed(2))

  });


//https://npm.io/package/osc-emitter
receiver.on('/example/3/position', function(x,y,z) {
  // do something.
  console.log(mappedXY(x).toFixed(0)+","+mappedXY(y).toFixed(0))
  var toArduino=mappedXY(x).toFixed(0)+","+mappedXY(y).toFixed(0)+'\n'
  port.write(toArduino, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})
});

//https://npm.io/package/osc-receiver
receiver.on('/vals', function(r, g, b,x,y,z) {
  // do something.
  // console.log('OSC= '+r+','+g+','+b+','+x+','+y+','+z)
});

receiver.on("/"+name, function(s,r, g, b,x,y,z) {
  console.log(s)
    console.log('OSC= '+s+','+r+','+g+','+b+','+x+','+y+','+z)

});

receiver.on('message', function() {
  // handle all messages
  var address = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
});

});

function linear(x) {
  return x;
}
 


server.listen(3000, () => {
  console.log('listening on *:3000');
});