import React from 'react';
import TransactionItem from './TransactionItem';

function filterTransactionsByMonth(transactions, monthYear) {
  return transactions.filter(transaction => {
    const transactionMonthYear = transaction.date.slice(0, 7);
    return transactionMonthYear === monthYear;
  });
}

function TransactionList({ transactions, selectedMonth }) {
  const filteredTransactions = selectedMonth 
    ? filterTransactionsByMonth(transactions, selectedMonth) 
    : transactions;

  return (
    <ul>
      {filteredTransactions.map((transaction, index) => (
        <TransactionItem key={index} transaction={transaction} />
      ))}
    </ul>
  );
}
export default TransactionList;
