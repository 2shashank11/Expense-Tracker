import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense'); 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      description,
      amount: (type === 'expense' ? -parseFloat(amount) : parseFloat(amount)),
      date: new Date(date).toISOString().split('T')[0],
      type  
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 pt-4 pb-4">
       <div className="flex items-center mb-2">
        <label htmlFor="description" className="mr-2">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="amount" className="mr-2">Amount ($):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex items-center pt-2">
        <label htmlFor="date" className="mr-2">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
          required
        />        
        <span className="mr-2">Type:</span>
        <label htmlFor="expense" className="mr-2">
          <input
            type="radio"
            id="expense"
            value="expense"
            checked={type === 'expense'}
            onChange={() => setType('expense')}
          />
          Expense
        </label>
        <label htmlFor="income">
          <input
            type="radio"
            id="income"
            value="income"
            checked={type === 'income'}
            onChange={() => setType('income')}
          />
          Income
        </label>
      </div>

      <div className="pt-4">
        <button type="submit" className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-3xl">Add Transaction</button>
      </div> 
    </form>
  );
}

export default AddTransactionForm;

