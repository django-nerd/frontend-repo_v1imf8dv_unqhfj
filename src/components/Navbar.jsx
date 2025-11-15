import { Link, NavLink } from 'react-router-dom'
import { BookOpen, Library, LogIn, UserPlus, LayoutDashboard } from 'lucide-react'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <BookOpen className="text-blue-600" />
          <span>Ebookly</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/browse">Browse</NavItem>
          <NavItem to="/library">Library</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600">
            <LogIn size={18} /> Login
          </Link>
          <Link to="/register" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            <UserPlus size={18} /> Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}
