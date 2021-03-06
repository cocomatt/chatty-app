const express = require('express');
const WebSocket = require('ws');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

const PORT = 3001;
const server = express()
  .use(express.static(__dirname + '/public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const clientConnections = {}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function pickRandom(array) {
  return array[randomBetween(0, array.length)];
}

function assignCurrentUserIdandColor(clientSocket, colors) {
  clientSocket.id = uuidv4();
  assignedCurrentUserId = clientSocket.id;
  clientConnections[clientSocket.id] = clientSocket;
  let color = pickRandom(colors);
  let currentUserIdandColor = JSON.stringify({type: 'CurrentUserIdandColor', currentUserId: assignedCurrentUserId, color: color});
  clientSocket.send(currentUserIdandColor);
}

function countUsers() {
  let totalNumberOfUsers = JSON.stringify({type: 'UserCount', userCount: webSocketServer.clients.size});
  webSocketServer.clients.forEach(function each(client) {
    if (client.readyState === 1) {
      client.send(totalNumberOfUsers);
    }
  });
}

// Create the WebSockets server
const webSocketServer = new SocketServer({ server });
webSocketServer.options.clientTracking = false;

webSocketServer.on('connection', (clientSocket) => {
  countUsers();
  assignCurrentUserIdandColor(clientSocket, colors);
  clientSocket.username = 'Anonymous';

  clientSocket.on('message', function incoming(data) {
    let message = JSON.parse(data);
    if (message.type === 'NameChange') {
      clientSocket.username = message.username;
    }
    message.id = uuidv4();
    let newMessage = JSON.stringify(message);

    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === 1) {
        console.log('newMessage:', newMessage);
        client.send(newMessage);
      }
    });
  });

  clientSocket.on('close', (event) => {
    let exitingClientId = clientSocket.id;
    let exitingClientUsername = clientSocket.username;
    let exitingClientMessageId = uuidv4();
    let exitingClientMessage = {
      type: 'ExitMessage',
      exitingUserId: exitingClientId,
      exitingUsername: exitingClientUsername,
      id: exitingClientMessageId
    };
    let newExitingClientMessage = JSON.stringify(exitingClientMessage);
      webSocketServer.clients.forEach(function each(client) {
        if (client.readyState === 1) {
          client.send(newExitingClientMessage);
        }
      });
    delete clientConnections[clientSocket.id];
    delete clientSocket.id;
    countUsers();
  });
});
