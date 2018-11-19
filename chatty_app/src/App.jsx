import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
    this.socket = new WebSocket('ws://localhost:3001', 'protocolOne');
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'UserMessage':
        case 'SystemMessage': {
          const messages = this.state.messages.concat(message);
          this.setState({messages});
        }
          break;
        case 'nameChange':
          break;
        default:
          throw new Error('Unknown event type ' + message.type);
      }
    };
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: []
    };
  }

  addNewMessage(newMessage) {
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUsername(newUsername) {
    this.socket.send(JSON.stringify(newUsername));
  }

  // componentDidMount() {
  //   console.log('componentDidMount <App />');
  //   this.socket.onmessage = (event) => {
  //     console.log('Connected to server');
  //     console.log('event:', event);
  //   }
  //   // console.log('Connected to Server');
  // }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar />
        <Messages messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} changeUsername={this.changeUsername}/>
      </div>
    );
  }
}

export default App;
