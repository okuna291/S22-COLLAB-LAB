const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM5', baudRate: 9600 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

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
   console.log(data)
    var dat=data.split(',')
socket.emit("toclient", { r: dat[0], g: dat[1],b: dat[2], x: dat[3], y: dat[4], z: dat[5] });

  });


});

server.listen(3000, () => {
  console.log('listening on *:3000');
});