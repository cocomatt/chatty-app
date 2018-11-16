import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
          type: 'userMessage'
        },
        {
          id: 2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
          type: 'userMessage'
        }
        // {
        //   id:'3',
        //   content: 'Anonymous1 changed their name to nomnom.',
        //   type: 'SystemMessage'
        // }
      ]
    }
  }

  addNewUserMessage(newUserMessage) {
    console.log('newUserMessage:', newUserMessage);
    const messages = this.state.messages.concat(newUserMessage);
    console.log('messages in addNewUserMessage:', messages);
    this.setState(prevState => {
      return {
        currentUser: prevState.currentUser,
        messages: messages
      }
    });
    console.log('messages:', this.state.messages);
    console.log('currentUser:', this.state.currentUser);
  }

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newUserMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newUserMessage)
      console.log('messages in componentDidMount:', messages);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

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
