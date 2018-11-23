import React, {Component} from 'react';

class ExitMessage extends Component {

  render() {
    console.log('Rendering <ExitMessage/>');
    return (
      <div className="message-notification">
        <span className="message-content">{this.props.message.content}</span>
      </div>
    );
  }
}
export default ExitMessage;
