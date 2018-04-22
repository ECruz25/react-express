import React, { Component } from 'react';

const TransactionsList = ({ transactions }) => (
  <div className="transactions">
    {Object.keys(transactions).map(key => (
      <div className="transaction" key={key}>
        <p>{transactions[key].description}</p>
        <p>{transactions[key].date}</p>
      </div>
    ))}
  </div>
);

export default TransactionsList;
