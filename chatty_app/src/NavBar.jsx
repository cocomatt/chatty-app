import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    console.log('Rendering <NavBar/>');
    return (
      <div>
        <nav className="navbar">
          <span className="navbar-container">
            <a href="/" className="navbar-brand">Chatty</a>
            <span className="navbar-userCount">Number of users online: {this.props.userCount}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}
export default NavBar;
