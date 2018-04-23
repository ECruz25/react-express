import React, { PureComponent } from 'react';
import UserForm from './UserForm';

class LoginPage extends PureComponent {
  render() {
    return <UserForm authentication="login" loggedIn={this.props.loggedIn} login={this.props.login} />;
  }
}

export default LoginPage;
