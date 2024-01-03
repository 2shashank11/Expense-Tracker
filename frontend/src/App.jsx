import React, { useState, useEffect } from "react";
import TransactionList from "./components/TransactionList";
import AddTransactionForm from "./components/AddTransactionForm";

function MonthFilterDropdown({ onChange }) {
  // Generate an array of months from 2022 to 2024
  const months = [];
  for (let year = 2000; year <= 2024; year++) {
    for (let month = 1; month <= 12; month++) {
      const monthString = `${year}-${month.toString().padStart(2, "0")}`;
      months.push(monthString);
    }
  }

  return (
    <div className="pt-2 pb-2">
      <select
        className="p-1 rounded-xl"
        onChange={(e) => onChange(e.target.value)}
      >
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
  const [selectedMonth, setSelectedMonth] = useState("");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setBalance(balance + newTransaction.amount);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/expense/");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto p-10 text-xl bg-purple-100 md:h-screen">
      <h1 className="text-5xl font-bold p-6">Expense & Income Tracker</h1>
      <div className="flex justify-between flex-wrap">
        <div className="rounded-lg p-6 w-screen border-purple-500 border-4 bg-gradient-to-tr from-white via-purple-200 to-fuchsia-300">
          <AddTransactionForm onAddTransaction={addTransaction} />
        </div>
        <div className="mt-4 p-6 w-screen rounded-lg border-purple-500 border-4 bg-gradient-to-tr from-white via-purple-200 to-fuchsia-300">
          <h2 className="text-3xl font-semibold mb-2 text-purple-500">
            Current Balance: <b>${balance.toFixed(2)}</b>
          </h2>
          <MonthFilterDropdown onChange={setSelectedMonth} />
          <h2 className="text-3xl pt-4 font-semibold mb-2">
            Transaction History
          </h2>
          <TransactionList
            transactions={transactions}
            selectedMonth={selectedMonth}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
