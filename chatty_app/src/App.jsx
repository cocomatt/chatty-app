import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
    this.state = {
      userCount: 1,
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

  componentDidMount() {
    console.log('componentDidMount <App />');
    this.socket = new WebSocket('ws://localhost:3001', 'protocolOne');
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('message in componentDidMount:', message);
      switch (message.type) {
        case 'UserCount': {
          this.setState({userCount: message.userCount});
          }
          break;
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
    }
  }

  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar userCount={this.state.userCount}/>
        <Messages messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} changeUsername={this.changeUsername}/>
      </div>
    );
  }
}

export default App;
