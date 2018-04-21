import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AccountForm extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.accountName}</h3>
        <h3>{this.props.balance}</h3>
        <NavLink to={`financial/accounts/${this.props.id}`}>View</NavLink>
      </div>
    );
  }
}

export default AccountForm;
