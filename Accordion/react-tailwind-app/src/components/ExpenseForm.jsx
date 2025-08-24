import React, { useState } from 'react';

export function ExpenseForm({ onSubmit }) {
  const [form, setForm] = useState({ title:'', amount:'', date:'', category:'', notes:'' });

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.date) return alert('Title, amount, date are required');
    onSubmit({ ...form, amount: Number(form.amount) });
    setForm({ title:'', amount:'', date:'', category:'', notes:'' });
  };

  return (
    <div className='mt-12'>
    <form onSubmit={submit} className="  mt-100 flex flex-wrap gap-2  mb-6">
      <input name="title" placeholder="Title" value={form.title} onChange={update} className="border border-blue-300 p-2 rounded flex-1 min-w-[120px] shadow-md shadow-blue-300" />
      <input name="amount" type="number" step="0.01" placeholder="Amount" value={form.amount} onChange={update} className="border border-blue-300 p-2 rounded w-[100px] shadow-md shadow-blue-300" />
      <input name="date" type="date" value={form.date} onChange={update} className="border p-2 rounded shadow-md border-blue-300 shadow-blue-300" />
      <input name="category" placeholder="Category" value={form.category} onChange={update} className="border p-2 rounded w-[120px] border-blue-300 shadow-md shadow-blue-300" />
      <input name="notes" placeholder="Notes" value={form.notes} onChange={update} className="border p-2 rounded flex-1 min-w-[150px] shadow-md border-blue-300 shadow-blue-300" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow-sm shadow-blue-300">Add</button>
    </form>
    </div>
  );
}
