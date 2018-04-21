import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AccountView extends Component {
  render() {
    return (
      <div className="account-view">
        <h3 className="account-view__name">{this.props.accountName}</h3>
        <h3 className="account-view__balance">{this.props.balance}</h3>
        <NavLink to={`financial/accounts/${this.props.id}`}>View</NavLink>
      </div>
    );
  }
}

export default AccountView;
