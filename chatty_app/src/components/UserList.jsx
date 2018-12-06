import React, {Component} from 'react';

class UserList extends Component {
  render() {
    console.log('Rendering <UserList/>');
    console.log('this.props:', this.props);
    // const userArray = this.props.users.map(user => {
    //   return (<UserList key={user.id} user={user}/>);
    // });

    const userArray = 'User 1';

    console.log('userArray: ', userArray);

    return (
      <div>
        <div className="userlist">
          <h4 className="userlist-title">Chatty Cathy User List</h4>
          <span className="userlist-name" users={userArray} />
        </div>
      </div>
    );
  }
}

export default UserList;
