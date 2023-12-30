import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;
