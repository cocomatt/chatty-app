import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.onSubmit(event);
    }
  }

  onSubmit(event) {
    console.log('OnSubmit');
    if (event.target.value) {
      this.props.addNewUserMessage({
        username: this.props.currentUser.name,
        content: event.target.value,
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
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.onKeyPress}/>
      </footer>
    );
  }
}
export default ChatBar;
