import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function navLinkClass({ isActive }) {
  return [
    'block px-4 py-2 rounded-xl text-[13px] no-underline transition-colors',
    isActive
      ? 'bg-surface-container-low text-on-surface font-semibold'
      : 'text-on-surface-variant hover:bg-surface-container-lowest hover:text-on-surface',
  ].join(' ')
}

export default function AccountLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <main className="w-full px-4 md:px-8 py-8 max-w-6xl mx-auto">
      <div className="space-y-1 mb-6">
        <h2 className="font-headline-lg text-on-background m-0 leading-tight">My account</h2>
        <div className="text-on-surface-variant text-[13px]">Home / My account</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <aside className="w-full lg:w-64 bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-4">
          <div className="text-[12px] font-semibold text-on-surface-variant tracking-wide mb-3">MY ACCOUNT</div>
          <nav className="space-y-1">
            <NavLink to="/account" end className={navLinkClass}>Dashboard</NavLink>
            <NavLink to="/account/orders" className={navLinkClass}>Orders</NavLink>
            <NavLink to="/account/downloads" className={navLinkClass}>Downloads</NavLink>
            <NavLink to="/account/addresses" className={navLinkClass}>Addresses</NavLink>
            <NavLink to="/account/details" className={navLinkClass}>Account details</NavLink>
            <NavLink to="/account/wishlist" className={navLinkClass}>Wishlist</NavLink>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-xl text-[13px] transition-colors bg-transparent border-none cursor-pointer text-on-surface-variant hover:bg-surface-container-lowest hover:text-on-surface"
            >
              Logout
            </button>
          </nav>
        </aside>

        <section className="w-full lg:flex-1 min-w-0">
          <Outlet />
        </section>
      </div>
    </main>
  )
}

