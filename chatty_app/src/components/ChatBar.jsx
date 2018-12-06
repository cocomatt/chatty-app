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
        user_id: this.props.currentUser.id,
        color: this.props.currentUser.color,
        content: event.target.value,
        type: 'UserMessage'
      });
      event.target.value = '';
      this.setState({messageContent: ''});
    } else if ((event.target.value) && (event.target.className === 'chatbar-username')) {
      this.props.addNewMessage({
        user_id: this.props.currentUser.id,
        content: `${this.props.currentUser.name} changed name to ${event.target.value}`,
        type: 'SystemMessage'
      });
      console.log('onSubmit changeUsername')
      this.props.changeUsername({
        user_id: this.props.currentUser.id,
        username: event.target.value,
        type: 'NameChange'
      });
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
