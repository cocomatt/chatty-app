import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001', 'protocolOne');
    this.socket.onmessage = (event) => {
      console.log('event under .onmessage***: ', event);
      const message = JSON.parse(event.data);
      switch (message.type) {
        case 'UserMessage':
        case 'SystemMessage':
          console.log('message***:', message);
          const messages = this.state.messages.concat(message);
          console.log('messagesSSSS: ', messages);
          this.setState({messages});
          break;
      }
    };
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: []
    };
  }

  addNewMessage(newMessage) {
    console.log('newMessage:', newMessage);
    this.socket.send(JSON.stringify(newMessage));
  }

  changeUsername(newUsername) {
    console.log('newUsername:', newUsername);
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
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.addNewMessage.bind(this)} changeUsername={this.changeUsername.bind(this)}/>
      </div>
    );
  }
}

export default App;
