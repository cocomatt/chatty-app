import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      // this.props.addNewUserMessage(this.props.name, event.target.value);
      this.onSubmit(event);
    }
  }

  onInput(event) {
    this.setState({
      messageContent: event.target.value
    });
  }

  onSubmit(event) {
    console.log('OnSubmit');
    if (this.state.messageContent) {
      this.props.addNewUserMessage({
        id: Math.floor(Math.random() * 1000),
        username: this.props.currentUser.name,
        content: this.state.messageContent,
        type: 'UserMessage'
      });
      event.target.value = '';
      this.setState({messageContent: ''});
    }
  }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
      <footer className="chatbar" onSubmit={this.onSubmit}>
        <input className="chatbar-username" placeholder={this.props.currentUser.name || 'Your Name (Optional)'}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onInput={this.onInput.bind(this)} onKeyPress={this.onKeyPress.bind(this)}/>
      </footer>
    );
  }
}
export default ChatBar;
