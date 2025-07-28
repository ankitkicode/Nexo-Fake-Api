// src/pages/Products.jsx
import { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';
import ReactJson from 'react-json-view';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  const buildQuery = () => {
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    params.append('page', page);
    params.append('limit', limit);
    return params.toString();
  };

  const fetchProducts = async () => {
    const query = buildQuery();
    const res = await axios.get(`/products?${query}`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, [category, search, minPrice, maxPrice, page]);

  const copyUrl = () => {
    const query = buildQuery();
    navigator.clipboard.writeText(`${axios.defaults.baseURL}/products?${query}`);
    alert('✅ API URL copied to clipboard!');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">📦 Products Explorer</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <input
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="🔍 Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input
            type="number"
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="💰 Min Price"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="💵 Max Price"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">📂 All Categories</option>
            <option value="mobile">📱 Mobile</option>
            <option value="laptop">💻 Laptop</option>
            <option value="accessory">🎧 Accessory</option>
          </select>
        </div>

      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow border">
  <input
    type="text"
    readOnly
    value={`${axios.defaults.baseURL}/products?${buildQuery()}`}
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
        <h2 className="text-xl font-medium text-gray-700 mb-4">🧾 API Response</h2>
        <div className="overflow-x-auto text-sm">
          <ReactJson
            src={products}
            name={false}
            collapsed={false}
            enableClipboard={false}
            displayDataTypes={false}
            theme="rjv-default"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage(p => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          ⬅️ Prev
        </button>
        <span className="text-lg font-medium">Page {page}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
