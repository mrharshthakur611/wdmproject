import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Card({ to, icon, title }) {
  return (
    <Link
      to={to}
      className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 flex flex-col items-center justify-center gap-3 no-underline hover:bg-surface-container-low transition-colors"
    >
      <span className="material-symbols-outlined text-[34px] text-on-surface-variant">{icon}</span>
      <div className="text-on-surface font-semibold text-[14px]">{title}</div>
    </Link>
  )
}

export default function AccountDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const name = user?.name || 'User'

  return (
    <div className="space-y-6">
      <div className="p-4 bg-primary-container text-on-primary-container rounded-xl border border-outline-variant/20">
        <div className="text-[13px] font-semibold">
          Your account dashboard lets you view your recent orders, manage your addresses and edit your password and account details.
        </div>
      </div>

      <div className="text-[13px] text-on-surface-variant">
        Hello {name} (not {name}?{' '}
        <button
          type="button"
          onClick={handleLogout}
          className="text-primary underline bg-transparent border-none cursor-pointer p-0 font-inherit"
        >
          Log out
        </button>
        )
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Card to="/account/orders" icon="receipt_long" title="Orders" />
        <Card to="/account/downloads" icon="download" title="Downloads" />
        <Card to="/account/addresses" icon="location_on" title="Addresses" />
        <Card to="/account/details" icon="person" title="Account details" />
        <Card to="/account/wishlist" icon="favorite" title="Wishlist" />
        <button
          type="button"
          onClick={handleLogout}
          className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[34px] text-on-surface-variant">logout</span>
          <div className="text-on-surface font-semibold text-[14px]">Logout</div>
        </button>
      </div>

      <div className="text-on-surface-variant text-[13px]">
        Need something?{' '}
        <Link to="/" className="text-primary underline">Browse Products</Link>
      </div>
    </div>
  )
}

