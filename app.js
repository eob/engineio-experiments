var express = require('express');

// Require engine io from the symlinked project
// This guarantees on the server we will be using our
// development version.
var engineio = require('./engine.io/lib/engine.io.js');

// Create a new express app
var app = express();

// Create a new HTTP server listening on port 8000
var server = app.listen(8000);

// Create an Engine.IO instance on this server
var io = engineio.attach(server);

// Return the index.html file for the '/' path
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// Return the engine io client javascript
// ** NOTE
// ** Notice how the actual file we're returning is the
// ** development version of the file inside the engine.io-client
// ** folder. This subfolder is really a symlink (linux/mac) or
// ** shortcut (windows)
app.get('/engine.io-client/engine.io.js', function (req, res) {
  res.sendfile(__dirname + '/engine.io-client/engine.io.js');
});

// Here's where the actual Engine.IO server code comes in.
// Here we tell it what to do.

io.on('connection', function (socket) {
  socket.send("Hello!");
});


