import React, {Component} from 'react';

class SystemMessage extends Component {
  render() {
    console.log('Rendering <SystemMessage/>');
    return (
      <div className="message system">
        <span>Anonymous1 changed their name to nomnom.</span>
      </div>
    );
  }
}
export default SystemMessage;
