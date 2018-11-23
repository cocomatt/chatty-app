import React, {Component} from 'react';

import UserMessage from './UserMessage.jsx';
import SystemMessage from './SystemMessage.jsx';
import ExitMessage from './ExitMessage.jsx';

class Messages extends Component {

  render() {
    console.log('Rendering <Messages/>');

    const messageArray = this.props.messages.map(message => {
      if (message.type === 'UserMessage') {
        return (<UserMessage key={message.id} message={message}/>);
      } else if (message.type === 'SystemMessage') {
        return (<SystemMessage key={message.id} message={message}/>);
      } else if (message.type === 'ExitMessage') {
        return (<ExitMessage key={message.id} message={message}/>);
      }
    });
    console.log('messageArray', messageArray);

    return (
      <main className="messages">
        {messageArray}
      </main>
    );
  }
}

export default Messages;
