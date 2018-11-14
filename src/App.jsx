import React, {Component} from 'react';
<<<<<<< HEAD
import NavBar from './NavBar.jsx';
import Messages from './Messages.jsx';
=======
import MessageList from './MessageList.jsx';
>>>>>>> 563730c4e942ecca420b31e29045a56367cb10f6
import ChatBar from './ChatBar.jsx';


class App extends Component {
  render() {
    console.log('Rendering <App/>');
    return (
      <div>
<<<<<<< HEAD
        <NavBar />
        <Messages />
=======
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList />
>>>>>>> 563730c4e942ecca420b31e29045a56367cb10f6
        <ChatBar />
      </div>
    );
  }
}
export default App;
