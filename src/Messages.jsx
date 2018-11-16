import React, {Component} from 'react';

import UserMessage from './UserMessage.jsx';
import SystemMessage from './SystemMessage.jsx';

class Messages extends Component {

  render() {
    console.log('Rendering <Messages/>');

    const messageArray = this.props.messages.map(message => {
      const Message = UserMessage;
      return (<Message key={message.id} message={message}/>);
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
