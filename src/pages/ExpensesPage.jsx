import { useState,useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { getExpenses } from '../services/api';
import { useAuth } from '../context/AuthContext';

const ExpensesPage = () => {
  const {token} = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters,setFilters] = useState({ timeTerm: 'all', startDate: '', endDate: '' });
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
  };

  useEffect(()=>{
    setLoading(true);
    setError(null);
    (async ()=>{
      try{
        const queryParams = new URLSearchParams();

        if(filters.timeTerm !== 'all'){
          queryParams.append('timeTerm',filters.timeTerm);
        }

        if (filters.startDate) {
          queryParams.append('startDate', filters.startDate);
        }
    
        if (filters.endDate) {
          queryParams.append('endDate', filters.endDate);
        }
    
        queryParams.append('page', pagination.page);
        queryParams.append('limit', pagination.limit);

        
        const response = await getExpenses(token,queryParams);
        if(response.data){
          setExpenses(response.data);
        }
        setPagination((prev)=>({
          ...prev,
          total:response.total
        }));
      }catch(error){
        setError(error.message);
      }finally {
        setLoading(false);
      }
    })();
  },[
    JSON.stringify(filters),
    JSON.stringify(pagination.page)
  ]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, page: 1 }));
  }

  const handlePageChange = (direction) => {
    setPagination((prev) => ({
      ...prev,
      page: Math.max(1, prev.page + direction),
    }));
  }

  if (loading) return <p className="text-center">Loading expenses...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Expenses</h1>
      <ExpenseForm onSubmit={handleAddExpense} />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Expense List</h2>
        <div className="mb-4 space-y-2">
          <select
            name="timeTerm"
            value={filters.range}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full"
          >
            <option value="all">All</option>
            <option value="past_week">Past Week</option>
            <option value="past_month">Past Month</option>
            <option value="past_3_months">Last 3 Months</option>
            <option value="custom">Custom Range</option>
          </select>
          {filters.timeTerm === 'custom' && (
            <div className="flex space-x-2">
              <input
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
              />
              <input
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleFilterChange}
                className="border p-2 rounded w-full"
              />
            </div>
          )}
        </div>

        {expenses.length === 0 ? (
          <p className="text-gray-600">No expenses added yet.</p>
        ) : (
          <ul className="space-y-4">
            {expenses.map((expense) => (
              <li key={expense._id} className="bg-white p-4 rounded shadow-md">
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

        <div className='flex justify-between items-center mt-4'>
          <button
            disabled={pagination.page === 1}
            onClick={() => handlePageChange(-1)}
            className={`px-4 py-2 border rounded ${
              pagination.page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'
            }`}
          >
            Previous
          </button>
          <span>
            Page {pagination.page} of {Math.ceil(pagination.total / pagination.limit)}
          </span>
          <button
            disabled={pagination.page === Math.ceil(pagination.total / pagination.limit)}
            onClick={() => handlePageChange(1)}
            className={`px-4 py-2 border rounded ${
              pagination.page === Math.ceil(pagination.total / pagination.limit)
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;