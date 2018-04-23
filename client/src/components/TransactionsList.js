import React, { Fragment } from 'react';
import styled from 'styled-components';
import LoadingHOC from './HOC/LoadingHOC';

const StyledTransactionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const TransactionsList = ({ transactions }) => (
  <StyledTransactionsList>
    {Object.keys(transactions).map(key => (
      <Fragment>
        <p>{transactions[key].description}</p>
        <p>{transactions[key].date}</p>
      </Fragment>
    ))}
  </StyledTransactionsList>
);

export default LoadingHOC('transactions')(TransactionsList);
