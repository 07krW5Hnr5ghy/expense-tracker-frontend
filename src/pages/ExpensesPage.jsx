import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Expenses</h1>
      <ExpenseForm onSubmit={handleAddExpense} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Expense List</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-600">No expenses added yet.</p>
        ) : (
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="bg-white p-4 rounded shadow-md">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{expense.title}</h3>
                    <p className="text-gray-600">{expense.category}</p>
                    <p className="text-gray-600">{expense.date}</p>
                  </div>
                  <div className="font-bold text-blue-600">${expense.amount}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExpensesPage;