import React, { Component } from 'react';
import { Redirect } from 'react-router';

class UserForm extends Component {
  state = {
    username: '',
    password: '',
    redirect: false
  };

  componentWillUnmount = () => {
    this.setState(() => ({
      username: '',
      password: ''
    }));
  };

  onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`/app/users/${this.props.authentication}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.state)
      });
      if (response.ok) {
        this.setState({
          redirect: true
        });
        this.props.login(await response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  onUserNameChange = e => {
    const username = e.target.value;
    this.setState(() => ({
      username
    }));
  };

  onPasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({
      password
    }));
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="class">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="username"
            name="username"
            onChange={this.onUserNameChange}
            required
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            name="password"
            onChange={this.onPasswordChange}
            value={this.state.password}
            required
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
