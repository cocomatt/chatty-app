import React, {Component} from 'react';

class UserList extends Component {
  render() {
    console.log('Rendering <UserList/>');
    return (
      <div>
        <div className="userlist">
          <h4 className="userlist-title">Chatty Cathy User List</h4>
          <ul>
            <li className="user-in-list">User 1</li>
            <li className="user-in-list">User 2</li>
            <li className="user-in-list">User 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserList;
