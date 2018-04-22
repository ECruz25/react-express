import React, { Component, createRef } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class AccountForm extends Component {
  accountNameRef = createRef();
  balanceRef = createRef();

  state = {
    owner: ''
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const account = {
        accountName: this.accountNameRef.current.value,
        balance: this.balanceRef.current.value,
        owner: this.state.owner
      };
      await fetch('/app/financial/accounts/register', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(account)
      });
      this.props.addAccount(account);
    } catch (error) {
      console.log(error);
    }
    event.currentTarget.reset();
  };

  componentDidMount() {
    const owner = cookies.get('user');
    this.setState(() => ({ owner }));
  }

  render() {
    return (
      <form className="account-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="accountName"
          className="account-form__input"
          placeholder="Account Name"
          ref={this.accountNameRef}
        />
        <input
          type="number"
          name="balance"
          className="account-form__input"
          placeholder="balance"
          ref={this.balanceRef}
        />
        <button type="submit" className="account-form__button">
          Save
        </button>
      </form>
    );
  }
}

export default AccountForm;
