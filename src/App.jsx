import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Browse from './pages/Browse'
import BookDetail from './pages/BookDetail'
import Reader from './pages/Reader'
import Library from './pages/Library'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminEbooks from './pages/admin/AdminEbooks'
import AdminOrders from './pages/admin/AdminOrders'
import AdminSettings from './pages/admin/AdminSettings'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/reader/:id" element={<Reader />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/ebooks" element={<AdminEbooks />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
