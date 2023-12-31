import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

function MonthFilterDropdown({ onChange }) {
  // Sample list of months. Adjust as needed.
  const months = ['2023-01', '2023-02', '2023-03', /* ... add all months ... */];

  return (
    <div class="pt-2 pb-2">
    <select className="p-1 rounded-xl" onChange={(e) => onChange(e.target.value)}>
      <option value="">All Months</option>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
    </div>
  );
}


function App() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');
  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + newTransaction.amount);
  };

  return (
    <div className="mx-auto p-10 text-xl bg-purple-100 md:h-screen">
      <h1 className="text-5xl font-bold p-6">Expense & Income Tracker</h1>
      <div className="flex justify-between flex-wrap">
        <div className="rounded-lg p-6 w-screen border-purple-500 border-4 bg-gradient-to-tr from-white via-purple-200 to-fuchsia-300">
          <AddTransactionForm onAddTransaction={addTransaction} />
        </div>
        <div className="mt-4 p-6 w-screen rounded-lg border-purple-500 border-4 bg-gradient-to-tr from-white via-purple-200 to-fuchsia-300">
          <h2 className="text-3xl font-semibold mb-2 text-purple-500">Current Balance: <b>${balance.toFixed(2)}</b></h2>
          <MonthFilterDropdown onChange={setSelectedMonth} />
          <h2 className="text-3xl pt-4 font-semibold mb-2">Transaction History</h2>
          <TransactionList transactions={transactions}  selectedMonth={selectedMonth}/>
        </div>
      </div>
    </div>
  );
}

export default App;
