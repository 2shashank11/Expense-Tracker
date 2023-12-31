import React from 'react';

function TransactionItem({ transaction }) {
  const transactionType = transaction.amount >= 0 ? 'Income' : 'Expense';
  return (
    <li class={`p-2 mb-2 ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
      <b>{transaction.description}</b> - ${transaction.amount} ({transactionType})
    </li>
  );
}

export default TransactionItem;
