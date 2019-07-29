import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    title: 'Dashboard page',
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

export default Dashboard;
