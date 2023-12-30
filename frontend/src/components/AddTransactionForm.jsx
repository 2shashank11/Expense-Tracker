import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      description,
      amount: parseFloat(amount),
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} class="mb-4 pt-4 pbp-4">
      <div class="flex items-center mb-2">
        <label htmlFor="description" class="mr-2">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          class="border p-2 rounded"
        />
      </div>
      <div class="flex items-center">
        <label htmlFor="amount" class="mr-2">Amount ($):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          class="border p-2 rounded"
        />
      </div>
      <div class="pt-4">
        <button type="submit" class="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Add Transaction</button>
      </div> 
    </form>
  );
}

export default AddTransactionForm;
