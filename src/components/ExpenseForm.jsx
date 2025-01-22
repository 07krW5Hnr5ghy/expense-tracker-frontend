import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { createExpense } from '../services/api';

const ExpenseForm = ({ onSuccess }) => {
  const {token} = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fetchError,setFetchError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setFetchError(null);

    try{
      if (!formData.title || !formData.amount || !formData.category || !formData.date) {
        setError('All fields are required.');
        return;
      }
  
      if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
        setError('Amount must be a positive number.');
        return;
      }
  
      setError('');
      createExpense(formData,token,onSuccess);
  
      setFormData({ title: '', amount: '', category: '', date: '' });
    }catch(err){
      setFetchError(err.message);
    }finally{
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Add New Expense</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {fetchError && <p className="text-red-500 mb-4">{fetchError}</p>}

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        >
          <option value="">Select a category</option>
          <option value="Groceries">Groceries</option>
          <option value="Leisure">Leisure</option>
          <option value="Electronics">Electronics</option>
          <option value="Utilities">Utilities</option>
          <option value="Clothing">Clothing</option>
          <option value="Health">Health</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded mt-1"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {loading ? 'Saving...' : 'Add Expense'}
      </button>
    </form>
  );
};

export default ExpenseForm;