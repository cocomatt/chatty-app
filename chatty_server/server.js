// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
// Make the express server serve static assets (html, javascript, css) from the
// public folder
.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const webSocketServer = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

webSocketServer.on('connection', function connection(clientSocket) {
  console.log('Client connected');
  clientSocket.on('message', function incoming(message) {
    const parsedMessage = JSON.parse(message);
    console.log('received: %s', parsedMessage);
  });

  clientSocket.send('Connected to server');
// Set up a callback for when a client closes the socket. This usually means they
// closed their browser.

  clientSocket.on('close', () => console.log('Client disconnected'));
});
