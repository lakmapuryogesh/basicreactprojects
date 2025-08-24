import React, { useEffect, useState } from 'react';
import { ExpenseForm } from './components/ExpenseForm.jsx';
import { ExpenseList } from './components/ExpenseList.jsx';
import { api } from './api.js';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await api.list();
        setExpenses(data);
      } catch (e) {
        setError('Failed to load expenses. Is backend running on :8080?');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCreate = async (payload) => {
    const created = await api.create(payload);
    setExpenses(prev => [created, ...prev]);
  };

  const handleUpdate = async (id, payload) => {
    const updated = await api.update(id, payload);
    setExpenses(prev => prev.map(e => e.id === id ? updated : e));
  };

  const handleDelete = async (id) => {
    await api.remove(id);
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="max-w-full max-h-full mx-auto p-6 h-screen w-screen bg-gradient-to-t from-indigo-500">
      <h1 className="fixed text-gray shadow-xl  text-3xl bg-gradient-to-r from-indigo-500 font-bold rounded-xl  mb-2">Expense Tracker</h1>
      {error && (
        <div className="bg-red-100 text-red-800 p-4 mb-4 border border-red-400 rounded">
          {error}
        </div>
      )}

      <ExpenseForm onSubmit={handleCreate} />

      {loading ? <p>Loading...</p> : <ExpenseList items={expenses} onUpdate={handleUpdate} onDelete={handleDelete} />}
    </div>
  );
}
