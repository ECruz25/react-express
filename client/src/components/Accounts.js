import React, { Component } from 'react';
import AccountForm from './AccountForm';
import AccountView from './AccountView';

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
      <div>
        <h2>Total: {this.state.totalBalance}</h2>
        {this.state.accounts.map(account => (
          <AccountView
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
