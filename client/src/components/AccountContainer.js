import React, { Component } from 'react';
import Account from './Account';

class AccountContainer extends Component {
  state = {
    accounts: {},
    transactions: {},
  };

  async componentWillMount() {
    try {
      const response = await fetch(`/app/financial/accounts/${this.props.user}`);
      const accounts = await response.json();
      const response2 = await fetch(
        `/app/financial/accounts/${this.props.user}/${this.props.match.params.id}/transactions`
      );
      const transactions = await response2.json();
      this.setState({ accounts, transactions });
    } catch (error) {
      console.log(error);
    }
  }

  createTransfer = async transaction => {
    transaction.user = this.props.user;
    console.log(transaction);
    try {
      await fetch(`/app/financial/accounts/${this.props.user}/transactions/register/transfer`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(transaction),
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Account
        accounts={this.state.accounts}
        id={this.props.match.params.id}
        transfer={this.createTransfer}
        transactions={this.state.transactions}
      />
    );
  }
}

export default AccountContainer;
