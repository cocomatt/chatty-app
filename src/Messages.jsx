import React, {Component} from 'react';
import UserMessage from './UserMessage.jsx';
import SystemMessage from './SystemMessage.jsx';

class Messages extends Component {
  render() {
    console.log('Rendering <MessageList/>');
    return (
      <main className="messages">
        <UserMessage />
        <SystemMessage />
      </main>
    );
  }
}
export default Messages;
