const BASE = 'http://localhost:8081/api/expenses';

async function http(path, options = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || res.statusText);
  }
  if (res.status === 204) return null;
  return res.json();
}

export const api = {
  list: () => http(BASE),
  get: (id) => http(`${BASE}/${id}`),
  create: (data) => http(BASE, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => http(`${BASE}/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (id) => http(`${BASE}/${id}`, { method: 'DELETE' })
};
