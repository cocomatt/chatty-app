import React, {Component} from 'react';

import NavBar from './components/NavBar.jsx';
import Messages from './components/Messages.jsx';
import UserList from './components/UserList.jsx';
import ChatBar from './components/ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
    this.state = {
      userCount: 1,
      currentUser: {id: '', name: 'Anonymous', color: 'black'},
      messages: []
    };
  }

  addNewMessage(newMessage) {
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUsername(newUsernameMessage) {
    this.socket.send(JSON.stringify(newUsernameMessage));
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    this.socket = new WebSocket('ws://localhost:3001', 'protocolOne');
    this.socket.onmessage = (event) => {
      console.log('event.data:', event.data);
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'UserCount': {
          this.setState({userCount: message.userCount});
          }
          break;
        case 'CurrentUserIdandColor': {
          const currentUser = {
            id: message.currentUserId,
            name: this.state.currentUser.name,
            color: message.color
          }
          this.setState({currentUser: currentUser});
          }
          break;
        case 'UserMessage':
        case 'SystemMessage': {
          const messages = this.state.messages.concat(message);
          this.setState({messages});
          }
          break;
        case 'ExitMessage': {
          let exitingUserId = message.exitingUserId;
          let exitingUsername = message.exitingUsername;
          message.content = `${exitingUsername} has left the chat`;
          const messages = this.state.messages.concat(message);
          this.setState({messages});
          }
          break;
        case 'NameChange':
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
        <NavBar userCount={this.state.userCount} onClientExit={this.onClientExit}/>
        <Messages messages={this.state.messages}/>
        <UserList />
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage} changeUsername={this.changeUsername}/>
      </div>
    );
  }
}

export default App;
