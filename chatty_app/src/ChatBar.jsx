import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onKeyPress(event) {
    if ((event.key === 'Enter') && (event.target.className === 'chatbar-message')) {
      this.onSubmit(event);
    } else if ((event.key === 'Enter') && (event.target.className === 'chatbar-username')) {
      this.onSubmit(event);
    }
  }

  onSubmit(event) {
    console.log('OnSubmit');
    if ((event.target.value) && (event.target.className === 'chatbar-message')) {
      this.props.addNewMessage({
        username: this.props.currentUser.name,
        content: event.target.value,
        type: 'UserMessage'
      });
      event.target.value = '';
      this.setState({messageContent: ''});
    } else if ((event.target.value) && (event.target.className === 'chatbar-username')) {
      console.log('event.target.value: ', event.target.value);
      this.props.addNewMessage({
        content: `${this.props.currentUser.name} changed name to ${event.target.value}`,
        type: 'SystemMessage'
      });
      console.log('addNewSystemMessage called');
      this.props.changeUsername({
        username: event.target.value,
      });
      console.log('changeUsername called');
      this.props.currentUser.name = event.target.value;
      this.setState({username: event.target.value});
    }
  }

  render() {
    console.log('Rendering <ChatBar/>');
    return (
      <footer className="chatbar" onSubmit={this.onSubmit}>
        <input className="chatbar-username" placeholder={this.props.currentUser.name || 'Your Name (Optional)'} onKeyPress={this.onKeyPress}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.onKeyPress}/>
      </footer>
    );
  }
}
export default ChatBar;
