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
      <form onSubmit={this.onSubmit} className="user-form">
        <label className="user-form__label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="user-form__input username"
          name="username"
          onChange={this.onUserNameChange}
          required
          value={this.state.username}
        />
        <label className="user-form__label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="user-form__input password"
          name="password"
          onChange={this.onPasswordChange}
          value={this.state.password}
          required
        />
        <button type="submit">Go!</button>
      </form>
    );
  }
}

export default UserForm;
