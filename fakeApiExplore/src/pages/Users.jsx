// src/pages/Users.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';
import ReactJson from 'react-json-view';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('');
  const [limit, setLimit] = useState(6);

  const buildQuery = () => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (location) params.append('location', location);
    if (sort) params.append('sort', sort);
    if (limit) params.append('limit', limit);
    return params.toString();
  };

  const fetchUsers = async () => {
    const query = buildQuery();
    const res = await axios.get(`/users?${query}`);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [search, location, sort, limit]);

  const copyUrl = () => {
    const query = buildQuery();
    navigator.clipboard.writeText(`${axios.defaults.baseURL}/users?${query}`);
    alert('✅ API URL copied to clipboard!');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">👤 Users Explorer</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            placeholder="🔍 Search by name or username"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="📍 Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="">📊 Sort by</option>
            <option value="name">Name</option>
            <option value="username">Username</option>
          </select>
          <input
            type="number"
            placeholder="🔢 Limit"
            value={limit}
            onChange={e => setLimit(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

       <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow border">
  <input
    type="text"
    readOnly
    value={`${axios.defaults.baseURL}/users?${buildQuery()}`}
    className="w-full mr-4 px-4 py-2 rounded-lg border text-sm text-gray-700 bg-gray-50 focus:outline-none"
  />
  <button
    onClick={copyUrl}
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition duration-150 shadow text-sm"
  >
Copy
  </button>
</div>

      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-medium text-gray-700 mb-4">📦 API Response</h2>
        <div className="overflow-x-auto text-sm">
          <ReactJson
            src={users}
            name={false}
            collapsed={false}
            enableClipboard={false}
            displayDataTypes={false}
            theme="rjv-default"
          />
        </div>
      </div>
    </div>
  );
}
