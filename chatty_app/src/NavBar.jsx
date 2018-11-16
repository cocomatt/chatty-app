import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    console.log('Rendering <NavBar/>');
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
      </div>
    );
  }
}
export default NavBar;
