import React, { Component, createRef } from 'react';

class AccountForm extends Component {
  accountNameRef = createRef();
  balanceRef = createRef();

  onSubmit = async event => {
    event.preventDefault();
    const account = {
      accountName: this.accountNameRef.current.value,
      balance: this.balanceRef.current.value
    };
    this.props.addAccount(account);
    event.currentTarget.reset();
  };

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
