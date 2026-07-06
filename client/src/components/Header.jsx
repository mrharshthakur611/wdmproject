import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import CartDrawer from './CartDrawer'

export default function Header({ toggleSidebar }) {
  const { isAuthenticated, logout, user } = useAuth()
  const { cartItemCount, cartItems } = useCart()
  const { wishlistCount } = useWishlist()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsCartOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!isCartOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [isCartOpen])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const viewFullCart = () => { setIsCartOpen(false); navigate('/cart') }

  return (
    <>
      <header className="bg-surface shadow-sm sticky top-0 z-50">
        {/* ── Top utility bar ── */}
        <div className="w-full px-4 md:px-8 py-1 flex justify-between items-center text-[12px] border-b border-outline-variant/30">
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors">About Us</a>
            <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors">Contact Us</a>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="flex items-center gap-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px]">call</span> 7420097008
            </span>
            <Link to="/wishlist" className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[16px]">favorite</span>
              <span>Wishlist{wishlistCount > 0 ? ` (${wishlistCount})` : ''}</span>
            </Link>
            {isAuthenticated ? (
              <button onClick={logout} className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-[12px] font-inherit p-0">
                <span className="material-symbols-outlined text-[16px]">logout</span>
                <span>Logout ({user?.name?.split(' ')[0]})</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[16px]">person</span> Login / Register
              </Link>
            )}
            {isAuthenticated && user?.isAdmin && (
              <Link to="/admin" className="flex items-center gap-1 text-primary font-semibold hover:text-primary/80 transition-colors">
                <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span> Admin
              </Link>
            )}
          </div>
        </div>

        {/* ── Main branding + search row ── */}
        <div className="w-full px-4 md:px-8 py-3 flex items-center gap-4">
          {/* Hamburger — always visible, opens sidebar */}
          <button
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            className="flex flex-col justify-center gap-[5px] w-10 h-10 bg-primary-container border border-outline-variant/30 rounded-xl cursor-pointer p-2 flex-shrink-0"
          >
            <span className="block w-full h-[3px] bg-on-primary-container rounded-sm"></span>
            <span className="block w-full h-[3px] bg-on-primary-container rounded-sm"></span>
            <span className="block w-full h-[3px] bg-on-primary-container rounded-sm"></span>
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 no-underline">
            <img src="/logo.png" alt="We Deliver Mussoorie" className="h-14 w-auto max-w-[200px] object-contain" />
          </Link>

          {/* All Categories button (desktop) */}
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-xl font-semibold text-[13px] hover:brightness-95 transition-all shadow-sm border-none cursor-pointer flex-shrink-0">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            All Categories
          </button>

          {/* Search bar — grows to fill space */}
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary transition-all outline-none text-[14px]"
              placeholder="Search for groceries, food and more..."
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
          </div>

          {/* Cart button */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex-shrink-0 w-10 h-10 bg-surface-container hover:bg-surface-container-high rounded-full cursor-pointer transition-colors border-none flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <CartDrawer open={isCartOpen} onClose={closeCart} onViewCart={viewFullCart} items={cartItems} />
    </>
  )
}
