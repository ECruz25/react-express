import React, { Component } from 'react';

class Account extends Component {
  state = {
    account: {},
    accounts: {},
    transferAmount: 0
  };

  async componentWillMount() {
    try {
      const response = await fetch(
        `/app/financial/accounts/${this.props.user}/${
          this.props.match.params.id
        }`
      );
      const account = await response.json();
      this.setState({ account: account[0] });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `/app/financial/accounts/${this.props.user}`
      );
      const accounts = await response.json();
      this.setState({ accounts });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="accounts">
        <div className="accounts__titles">
          <h2>Account Name</h2>
          <h2>Account Balance</h2>
          <h2>Account Options</h2>
        </div>
        <form className="transfer-form" onSubmit={this.onSubmit}>
          <input
            type="number"
            className="transfer-form__amount"
            value={this.state.transferAmount}
            onChange={this.onTransferAmountChange}
          />
          <select type="number" className="transfer-form__account">
            {Object.keys(this.state.accounts).map(key => (
              <option key={key} value={this.state.accounts[key]._id}>
                {this.state.accounts[key].accountName}
              </option>
            ))}
          </select>
          <button type="submit">Transfer</button>
        </form>
      </div>
    );
  }
}

export default Account;
