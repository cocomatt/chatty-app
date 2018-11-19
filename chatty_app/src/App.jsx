import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001', 'protocolOne');
    this.socket.onmessage = (event) => {
      console.log('event under .onmessage: ', event);
      let message = JSON.parse(event.data);
      console.log('message***:', message);
      const messages = this.state.messages.concat(message);
      this.setState({messages});
    };
    this.state = {
      currentUser: {name: 'Anonymous'},
      messages: []
    };
  }

  addNewUserMessage(newUserMessage) {
    console.log('newUserMessage:', newUserMessage);
    this.socket.send(JSON.stringify(newUserMessage));
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
        <ChatBar currentUser={this.state.currentUser} addNewUserMessage={this.addNewUserMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;
