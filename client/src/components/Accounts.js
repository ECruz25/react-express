import React, { Component } from 'react';
import AccountForm from './AccountForm';
import AccountCard from './AccountCard';

class Accounts extends Component {
  state = {
    accounts: [],
    totalBalance: 0
  };

  async componentWillMount() {
    try {
      const response = await fetch('/app/financial/accounts');
      const accounts = await response.json();
      let totalBalance = 0;
      accounts.map(account => (totalBalance += account.balance));
      this.setState({ accounts, totalBalance });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="accounts">
        <div className="accounts__total">
          <h2>Total: {this.state.totalBalance}</h2>
        </div>
        <div className="accounts__titles">
          <h2>Account Name</h2>
          <h2>Account Balance</h2>
          <h2>Account Options</h2>
        </div>
        {this.state.accounts.map(account => (
          <AccountCard
            balance={account.balance}
            accountName={account.accountName}
            id={account._id}
            key={account._id}
          />
        ))}
        <AccountForm />
      </div>
    );
  }
}

export default Accounts;
