import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AccountCard extends Component {
  render() {
    return (
      <div className="account-view">
        <p className="account-view__name">{this.props.accountName}</p>
        <h3 className="account-view__balance">{this.props.balance}</h3>
        <div className="account-view__options">
          <NavLink to={`financial/accounts/${this.props.id}`}>View</NavLink>
        </div>
      </div>
    );
  }
}

export default AccountCard;
