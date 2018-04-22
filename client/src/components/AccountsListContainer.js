import React, { Component } from 'react';
import AccountsList from './AccountsList';

class AccountsListContainer extends Component {
  state = {
    accounts: {},
    totalBalance: 0
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `/app/financial/accounts/${this.props.user}`
      );
      const accounts = await response.json();
      let totalBalance = 0;
      accounts.map(account => (totalBalance += account.balance));
      this.setState({ accounts, totalBalance });
    } catch (error) {
      console.log(error);
    }
  }

  addAccount = async account => {
    account['owner'] = this.props.user;
    try {
      await fetch(`/app/financial/accounts/${this.props.user}/register`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(account)
      });
      const response = await fetch(
        `/app/financial/accounts/${this.props.user}`
      );
      const accounts = await response.json();
      this.setState({ accounts });
    } catch (error) {
      console.log(error);
    }
  };

  deleteAccount = async account => {
    try {
      const accounts = { ...this.state.accounts };
      await fetch(
        `/app/financial/accounts/${this.props.user}/${
          accounts[account]._id
        }/delete`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'delete'
        }
      );
      delete accounts[account];
      console.log(accounts);
      this.setState({ accounts });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <AccountsList
        accounts={this.state.accounts}
        addAccount={this.addAccount}
        deleteAccount={this.deleteAccount}
      />
    );
  }
}

export default AccountsListContainer;
