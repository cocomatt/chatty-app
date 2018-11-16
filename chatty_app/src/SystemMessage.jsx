import React, {Component} from 'react';

class SystemMessage extends Component {

  render() {
    console.log('Rendering <SystemMessage/>');
    return (
      <div className="message system">
        <span className="message-content">{this.props.message.content}</span>
      </div>
    );
  }
}
export default SystemMessage;
