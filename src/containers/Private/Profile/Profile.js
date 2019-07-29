import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  state = {
    title: 'Profile page',
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        {title}
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Profile;
