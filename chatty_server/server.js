const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

const PORT = 3001;

const server = express()

.use(express.static('public'))
.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const webSocketServer = new SocketServer({ server });

webSocketServer.on('connection', (clientSocket) => {
  clientSocket.on('message', function incoming(data) {
    let message = JSON.parse(data);
    message.id = uuidv4();
    let newMessage = JSON.stringify(message);
    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === 1) {
        client.send(newMessage);
      }
    });
  });

  clientSocket.on('close', () => console.log('Client disconnected'));
});
