import React, { Component, createRef } from 'react';
import TransactionsList from './TransactionsList';

class Account extends Component {
  onSubmitTransfer = e => {
    e.preventDefault();
    const transaction = {
      fromAccount: this.props.id,
      amount: this.amountRef.current.value,
      toAccount: this.toAccountRef.current.value,
    };
    this.props.transfer(transaction);
  };
  toAccountRef = createRef();
  amountRef = createRef();

  render() {
    return (
      <div className="account">
        <form className="transfer-form" onSubmit={this.onSubmitTransfer}>
          <input type="number" className="transfer-form__amount" ref={this.amountRef} />
          <select type="number" className="transfer-form__account" ref={this.toAccountRef}>
            {Object.keys(this.props.accounts).map(key => (
              <option key={key} value={this.props.accounts[key]._id}>
                {this.props.accounts[key].accountName}
              </option>
            ))}
          </select>
          <button type="submit">Transfer</button>
        </form>
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default Account;
