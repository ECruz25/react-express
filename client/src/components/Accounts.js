import React, { Component } from 'react';
import AccountForm from './AccountForm';
import AccountView from './AccountView';

class Accounts extends Component {
  state = {
    accounts: [],
    totalBalance: 0
  };
  async componentDidMount() {
    try {
      const response = await fetch('/app/financial/accounts');
      const accounts = await response.json();
      console.log(accounts);
      this.setState({ accounts });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
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
