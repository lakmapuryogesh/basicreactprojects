import React, { useState } from 'react';

function Row({ item, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(item);
  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const save = () => { onUpdate(item.id, {...form, amount: Number(form.amount)}); setEdit(false); };

  return (
    <tr className="border-b">
      <td className="p-2 border-blue-100 shadow-md">{edit ? <input name="title" value={form.title} onChange={update} className="border p-1 rounded" /> : item.title}</td>
      <td className="p-2 border-blue-950 shadow-md">{edit ? <input name="amount" type="number" value={form.amount} onChange={update} className="border p-1 rounded" /> : item.amount}</td>
      <td className="p-2 border-blue-950 shadow-md">{edit ? <input name="date" type="date" value={form.date} onChange={update} className="border p-1 rounded" /> : item.date}</td>
      <td className="p-2 border-blue-950 shadow-md">{edit ? <input name="category" value={form.category || ''} onChange={update} className="border p-1 rounded" /> : (item.category || '')}</td>
      <td className="p-2 border-blue-950 shadow-md">{edit ? <input name="notes" value={form.notes || ''} onChange={update} className="border p-1 rounded" /> : (item.notes || '')}</td>
      <td className="p-2 flex gap-2">
        {edit ? (
          <>
            <button onClick={save} className="bg-green-500 text-white px-2 py-1 rounded shadow-md">Save</button>
            <button onClick={() => setEdit(false)} className="bg-gray-400 text-white px-2 py-1 rounded shadow-md">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setEdit(true)} className="bg-yellow-500 text-white px-2 py-1 rounded shadow-md">Edit</button>
            <button onClick={() => onDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded shadow-md">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export function ExpenseList({ items, onUpdate, onDelete }) {
  if (!items.length) return <p>No expenses yet. Add one above.</p>;
  return (
    <table className="w-full border-collapse border-2 border-blue-300">
      <thead>
        <tr className="bg-gray-200 border-blue-300 border-2">
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Title</th>
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Amount</th>
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Date</th>
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Category</th>
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Notes</th>
          <th className="p-2 border bg-blue-200 border-blue-300 border-2">Actions</th>
        </tr>
      </thead>
      <tbody className='border-blue-300 border-2'>
        {items.map(item => <Row key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete} />)}
      </tbody>
    </table>
  );
}
