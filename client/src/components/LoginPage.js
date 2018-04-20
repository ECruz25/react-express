import React, { Component } from 'react';
import UserForm from './UserForm';

class LoginPage extends Component {
  render() {
    return (
      <UserForm
        authentication="login"
        loggedIn={this.props.loggedIn}
        login={this.props.login}
      />
    );
  }
}

export default LoginPage;
