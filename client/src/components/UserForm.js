import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const StyledUserForm = styled.div`
  .user-form {
    width: 40%;
    margin: auto;
    margin-top: 12vh;
    display: grid;
    font-size: 18px;
    justify-items: center;
    &-label {
      margin: 10px 0;
      justify-self: start;
    }
    &-input {
      width: 90%;
      height: 6vh;
      padding-left: 10%;
      border: 1px solid gray;
      &:required {
        box-shadow: none;
      }
    }
    button {
      background-color: red;
      border: none;
      width: 100%;
      margin-top: 20px;
      height: 7vh;
      color: white;
      font-size: 25px;
      font-weight: 600;
    }
  }
  @media (max-width: 600px) {
    .user-form {
      width: 80%;
    }
  }
`;

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
    console.log(this.state);
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
      <StyledUserForm>
        <form onSubmit={this.onSubmit} className="user-form">
          <label className="user-form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="user-form-input username"
            name="username"
            onChange={this.onUserNameChange}
            required
            value={this.state.username}
          />
          <label className="user-form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="user-form-input password"
            name="password"
            onChange={this.onPasswordChange}
            value={this.state.password}
            required
          />
          <button type="submit">Go!</button>
        </form>
      </StyledUserForm>
    );
  }
}

export default UserForm;
