import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class AccountForm extends Component {
  state = {
    accountName: '',
    balance: 0,
    owner: ''
  };
  onSubmit = async e => {
    e.preventDefault();
    try {
      await fetch('/app/financial/accounts/register', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.state)
      });
      this.setState({ accountName: '', balance: 0 });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    const owner = cookies.get('user');
    this.setState(() => ({ ...this.props, owner }));
  }

  onAccountNameChange = e => {
    const accountName = e.target.value;
    this.setState(() => ({
      accountName
    }));
  };

  onBalanceChange = e => {
    const balance = e.target.value;
    this.setState(() => ({
      balance
    }));
  };

  render() {
    return (
      <form className="account-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="accountName"
          className="account-form__input"
          placeholder="Account Name"
          value={this.state.accountName}
          onChange={this.onAccountNameChange}
        />
        <input
          type="number"
          name="balance"
          className="account-form__input"
          placeholder="balance"
          value={this.state.balance}
          onChange={this.onBalanceChange}
        />
        <button type="submit" className="account-form__button">
          Save
        </button>
      </form>
    );
  }
}

export default AccountForm;
