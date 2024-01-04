import React, { useState } from 'react';

function AddTransactionForm({ onAddTransaction }) {
  const [desc, setDesc] = useState('');
  const [total, setTotal] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!desc || !total) return;

    const newTransaction = {
      date: date.toString(),
      category,
      desc,
      total
    };

    console.log(newTransaction);
    if (type === 'expense') {
      const response = await fetch('http://localhost:4000/api/expense/', {
        
        method: 'POST',
        body: JSON.stringify(newTransaction),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json();
      console.log(json);
      onAddTransaction(json);

      if (!response.ok) {
        setError(json.error);
        console.log(error);
      }

      if (response.ok) {
        setDesc("")
        setTotal("")
        setCategory("")
        setDate("")
        setType('expense')
        console.log('new transaction added', json)
      }
   }

    else if (type === 'income') {
      const response = await fetch('http://localhost:4000/api/income/', {
        method: 'POST',
        body: JSON.stringify(newTransaction),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      const json = await response.json()
      console.log(json);
      onAddTransaction(json);

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setDesc("")
        setTotal("")
        setCategory("")
        setDate("")
        setType('income')
        console.log('new transaction added', json)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 pt-4 pb-4 font-semibold">
      <div className="flex items-center mb-2">
        <label htmlFor="desc" className="mr-2">Description :</label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="total" className="mr-2">Amount ($):</label>
        <input
          type="number"
          id="total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex items-center mb-2">
        <label htmlFor="category" className="mr-2">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <div className="flex items-center pt-4">
        <label htmlFor="date" className="mr-2">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
          required
        />
      </div>
      <div className="flex items-center pt-4">
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

