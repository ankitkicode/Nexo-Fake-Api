// App.jsx
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Products from './pages/Products';
import Users from './pages/Users';
import Posts from './pages/Posts';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Navbar */}
        <header className="bg-indigo-700 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold tracking-wide">🌐 NexoDev API Explorer</h1>
            <nav className="space-x-2">
              {['products', 'users', 'posts'].map((path) => (
                <NavLink
                  key={path}
                  exact
                  to={`/${path}`}
                  className="text-white px-3 py-2 rounded-md hover:bg-indigo-600 transition"
                  activeClassName="bg-white/20 font-semibold"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-5xl mx-auto px-6 py-10">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route exact path="/">
             <div className="bg-white p-8 rounded-xl shadow-md space-y-10">
  <h2 className="text-3xl font-bold text-indigo-700">📘 API Documentation – <code>nexodevfakeapi</code></h2>
  <p className="text-gray-700">This API provides mock data for frontend developers to experiment with.</p>

  {/* PRODUCTS */}
  <section>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">📦 Products</h3>
    <p className="mb-2"><strong>GET</strong> <code>/api/products</code></p>
    <div className="overflow-auto">
      <table className="w-full text-sm text-left border border-gray-200 rounded-md">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2">Parameter</th>
            <th className="p-2">Type</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="p-2">category</td>
            <td className="p-2">string</td>
            <td className="p-2">Filter by category (e.g., <code>mobile</code>)</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">minPrice / maxPrice</td>
            <td className="p-2">number</td>
            <td className="p-2">Price range</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">search</td>
            <td className="p-2">string</td>
            <td className="p-2">Search by product name</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">inStock</td>
            <td className="p-2">boolean</td>
            <td className="p-2">Availability only</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">sort</td>
            <td className="p-2">string</td>
            <td className="p-2">Sort by <code>price</code> or <code>rating</code></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-gray-600 mt-2 text-sm"><b>Example:</b> <code>/api/products?category=mobile&minPrice=500&sort=price</code></p>

    <p className="mt-4"><strong>GET</strong> <code>/api/products/:id</code> – Get product by ID</p>
  </section>

  {/* USERS */}
  <section>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">👤 Users</h3>
    <p className="mb-2"><strong>GET</strong> <code>/api/users</code></p>
    <div className="overflow-auto">
      <table className="w-full text-sm text-left border border-gray-200 rounded-md">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2">Parameter</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="p-2">search</td>
            <td className="p-2">Name or username</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">location</td>
            <td className="p-2">Filter by location</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">sort</td>
            <td className="p-2">Sort by <code>name</code> or <code>username</code></td>
          </tr>
          <tr className="border-t">
            <td className="p-2">limit</td>
            <td className="p-2">Result limit</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-gray-600 mt-2 text-sm"><b>Example:</b> <code>/api/users?search=ankit&location=India&limit=5</code></p>
    <p className="mt-4"><strong>GET</strong> <code>/api/users/:id</code> – Get user by ID</p>
  </section>

  {/* POSTS */}
  <section>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">📝 Posts</h3>
    <p className="mb-2"><strong>GET</strong> <code>/api/posts</code></p>
    <div className="overflow-auto">
      <table className="w-full text-sm text-left border border-gray-200 rounded-md">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2">Parameter</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="p-2">search</td>
            <td className="p-2">Title or content</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">author</td>
            <td className="p-2">Filter by author</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">tags</td>
            <td className="p-2">Comma-separated (e.g., <code>react,node</code>)</td>
          </tr>
          <tr className="border-t">
            <td className="p-2">sort</td>
            <td className="p-2"><code>likes</code> or <code>recent</code></td>
          </tr>
          <tr className="border-t">
            <td className="p-2">limit</td>
            <td className="p-2">Limit number of results</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-gray-600 mt-2 text-sm"><b>Example:</b> <code>/api/posts?tags=react,node&sort=likes&limit=10</code></p>

    <p className="mt-4"><strong>GET</strong> <code>/api/posts/:id</code> – Get post by ID</p>
  </section>

  {/* SETUP */}
  <section>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠 Setup</h3>
    <ul className="list-disc list-inside text-sm text-gray-700">
      <li><b>Base URL:</b> <code>http://localhost:5000/api</code></li>
      <li><b>Content-Type:</b> <code>application/json</code></li>
    </ul>
  </section>
</div>

            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
