import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class AccountCard extends PureComponent {
  render() {
    return (
      <div className="account-card">
        <p className="account-card__name">{this.props.accountName}</p>
        <h3 className="account-card__balance">{this.props.balance}</h3>
        <div className="account-card__options">
          <Link className="account-card__button" to={`/financial/accounts/account/${this.props.id}`}>
            View
          </Link>
          <button className="account-card__button" onClick={() => this.props.deleteAccount(this.props.index)}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default AccountCard;
