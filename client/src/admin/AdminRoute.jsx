import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './admin.css'

export default function AdminRoute({ children }) {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!user?.isAdmin) {
    return (
      <div className="adminAccessDenied">
        <div className="adminAccessDeniedIcon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M4.93 4.93l14.14 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h2>Access Denied</h2>
        <p>You don't have admin privileges.</p>
        <Link to="/" className="adminAccessDeniedLink">← Back to Store</Link>
      </div>
    )
  }

  return children
}
