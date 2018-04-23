import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AccountForm from './AccountForm';
import AccountCard from './AccountCard';
import LoadingHOC from './HOC/LoadingHOC';

const StyledAccountsList = styled.div`
  margin: 0 2vw;
  .accounts-titles {
    margin: 40px 0;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    justify-items: center;
  }
`;

class AccountsList extends PureComponent {
  render() {
    return (
      <StyledAccountsList>
        <div className="accounts-titles">
          <h2>Account Name</h2>
          <h2>Account Balance</h2>
          <h2>Account Options</h2>
        </div>
        {Object.keys(this.props.accounts).map(key => (
          <AccountCard
            balance={this.props.accounts[key].balance}
            accountName={this.props.accounts[key].accountName}
            id={this.props.accounts[key]._id}
            key={key}
            index={key}
            user={this.props.user}
            deleteAccount={this.props.deleteAccount}
          />
        ))}
        <AccountForm addAccount={this.props.addAccount} user={this.props.user} />
      </StyledAccountsList>
    );
  }
}

export default LoadingHOC('accounts')(AccountsList);
