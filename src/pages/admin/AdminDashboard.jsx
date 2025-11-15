import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Admin dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/admin/users" className="rounded-lg border p-4 hover:shadow">Users</Link>
        <Link to="/admin/ebooks" className="rounded-lg border p-4 hover:shadow">Ebooks</Link>
        <Link to="/admin/orders" className="rounded-lg border p-4 hover:shadow">Orders</Link>
        <Link to="/admin/settings" className="rounded-lg border p-4 hover:shadow">Settings</Link>
      </div>
    </section>
  )
}
