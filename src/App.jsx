import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
        <NavBar />
        <Messages />
        <ChatBar />
      </div>
    );
  }
}
export default App;
