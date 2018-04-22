import React, { Component } from 'react';
import AccountForm from './AccountForm';
import AccountCard from './AccountCard';

class Account extends Component {
  state = {
    accounts: {},
    totalBalance: 0
  };

  async componentWillMount() {
    try {
      console.log(this);
      const response = await fetch(
        `/app/financial/accounts/${this.state.user}/${
          this.props.match.params.id
        }`
      );
      const accounts = await response.json();
      let totalBalance = 0;
      accounts.map(account => (totalBalance += account.balance));
      this.setState({ accounts, totalBalance });
    } catch (error) {
      console.log(error);
    }
  }

  addAccount = account => {
    const accounts = { ...this.state.accounts };
    accounts[`account${Date.now()}`] = account;
    this.setState({ accounts });
  };

  render() {
    return (
      <div className="accounts">
        <div className="accounts__titles">
          <h2>Account Name</h2>
          <h2>Account Balance</h2>
          <h2>Account Options</h2>
        </div>
        <AccountCard />
        <AccountForm addAccount={this.addAccount} />
      </div>
    );
  }
}

export default Account;
