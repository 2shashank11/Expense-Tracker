import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + newTransaction.amount);
  };

  return (
    <div className="mx-auto p-10 text-xl">
      <h1 className="text-5xl font-bold p-6">Expense & Income Tracker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AddTransactionForm onAddTransaction={addTransaction} />
        <div className="mt-4">
          <h2 className="text-3xl font-semibold mb-2">Transaction History</h2>
          <TransactionList transactions={transactions} />
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-semibold mb-2">Current Balance: ${balance.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;