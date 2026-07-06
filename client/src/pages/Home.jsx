import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function formatInr(value) {
  if (typeof value !== 'number') return ''
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

// ── Quick Category Icons ───────────────────────────────────────────────────
const CATEGORY_ICONS = [
  { label: 'Groceries', icon: 'shopping_basket', path: '/grocery' },
  { label: 'Food',      icon: 'restaurant',       path: '/food' },
  { label: 'Essentials',icon: 'inventory_2',      path: '/essentials' },
  { label: 'Bakery',    icon: 'cake',             path: '/bakery' },
]

function QuickCategories() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-16">
      {CATEGORY_ICONS.map((cat) => (
        <Link key={cat.label} to={cat.path} className="flex flex-col items-center gap-sm group cursor-pointer no-underline">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-container rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-on-primary-container text-[48px]">{cat.icon}</span>
          </div>
          <span className="font-semibold text-body-md text-on-background">{cat.label}</span>
        </Link>
      ))}
    </section>
  )
}

// ── Hero Bento Grid ────────────────────────────────────────────────────────
function HeroBento() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Main hero card */}
      <div className="lg:col-span-2 relative h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md group">
        <div className="absolute inset-0 bg-[#FFF9E5]"></div>
        <div className="absolute inset-0 flex items-center px-lg md:px-xl z-10">
          <div className="max-w-md space-y-md">
            <span className="px-md py-1 bg-primary text-white text-label-md rounded-full inline-block">FASTEST DELIVERY</span>
            <h2 className="font-display-lg text-on-background leading-tight m-0">
              Order Your <br /><span className="text-primary">Food, Snacks</span>
            </h2>
            <Link to="/grocery" className="inline-block bg-on-background text-background px-xl py-md rounded-lg font-headline-md hover:scale-105 transition-transform no-underline">
              Shop Now
            </Link>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-0 h-4/5 w-1/2 object-contain object-bottom group-hover:translate-x-2 transition-transform duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWQRtpBME0s1rdFS1zLwcJrMC0Bs0eS5S_CP5ffxte8E7DV9XQOGcD_85cpLKLASeQghsPv3S8x4v1Jo99B05RFsstbbFtCUW5I6d5Sv1ZyAz94Tk2dHNuOPICYhFIcLlgmmaUVVnB_7km5CUUKQQ5tqfZXNIlCyKYtFHQxxq3ven_BcQlK2xyLw9OhsDR_LK0qnIq2VnVsyl4WAHCMVlYNfo5hv5tJzNaYeYkIF2TY-Fp9xvlc6DXLgXVzBfxpIoONlESaGl-UEA"
          alt="Grocery bag overflowing with fresh vegetables and snacks"
        />
      </div>

      {/* Side card */}
      <div className="bg-[#00D094] rounded-xl relative h-[300px] md:h-[450px] p-lg flex flex-col justify-between overflow-hidden shadow-md">
        <div className="z-10 space-y-xs">
          <h3 className="text-white font-display-lg leading-none m-0">24×7 SUPPORT</h3>
          <p className="text-white/90 font-label-md m-0">From We Deliver Mussoorie Team</p>
        </div>
        <div className="relative z-10">
          <a href="tel:7420097008" className="inline-block bg-error text-white px-md py-xs rounded-lg font-label-md hover:opacity-90 transition-colors no-underline">
            CALL NOW
          </a>
        </div>
        <img
          className="absolute right-0 bottom-0 w-full h-2/3 object-contain object-right-bottom"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-AG14XXSbiJ6FoTaIUfQhzvAvQdbRowBOKYSG3Cn2TWwmdJD9aoO0n2ZgW9WumriSK9jLfN2ki0MuYj5sDBQh6dPbzGbxHHk9z0ZtLBitvoYrCbB8f5kVMVStdiMivCUHpRvmo3yDKvIHEbKNN4ah0uRVPI1qgo5ZZAcKw1Kde6J-suqUqfoI7XQB08qe2L_g-ebbiO1Wv19tkghvFibbLYVfE9GtktFvPuQsLGAqOU_vGX5ZOwkvotdyegkuzxCSQsjV6HOSEu8"
          alt="Delivery executive on scooter"
        />
      </div>
    </section>
  )
}

// ── Trust Features Bar ─────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section className="bg-surface-container-lowest py-8 px-6 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 border border-outline-variant/20">
      <div className="flex items-center gap-md justify-center border-b md:border-b-0 md:border-r border-outline-variant/20 pb-md md:pb-0">
        <span className="material-symbols-outlined text-primary text-headline-lg" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-body-md m-0">Fresh Products</h4>
          <p className="text-label-sm text-on-surface-variant m-0">Guaranteed quality every day</p>
        </div>
      </div>
      <div className="flex items-center gap-md justify-center border-b md:border-b-0 md:border-r border-outline-variant/20 pb-md md:pb-0">
        <span className="material-symbols-outlined text-primary text-headline-lg" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-body-md m-0">Safe Payment</h4>
          <p className="text-label-sm text-on-surface-variant m-0">With any major bank card</p>
        </div>
      </div>
      <div className="flex items-center gap-md justify-center">
        <span className="material-symbols-outlined text-primary text-headline-lg" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-body-md m-0">24/7 Support</h4>
          <p className="text-label-sm text-on-surface-variant m-0">Always here to help you</p>
        </div>
      </div>
    </section>
  )
}


// ── Products Section ───────────────────────────────────────────────────────
function ProductsSection({ title, actionLabel, actionPath, products }) {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end border-b-2 border-outline-variant/20 pb-2">
        <h3 className="font-headline-lg text-on-background m-0">{title}</h3>
        {actionLabel && (
          <Link to={actionPath || '#'} className="text-primary font-label-md hover:underline no-underline">
            {actionLabel}
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((p) => (
          <div key={p.id} className="relative">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Home Page ──────────────────────────────────────────────────────────────
function Home() {
  const [recentlyViewed, setRecentlyViewed] = useState([])
  const [weeklyDiscounts, setWeeklyDiscounts] = useState([])

  useEffect(() => {
    Promise.all([
      fetch('/api/products?section=recently-viewed').then((r) => r.json()),
      fetch('/api/products?section=weekly-discounts').then((r) => r.json()),
    ])
      .then(([recent, weekly]) => {
        setRecentlyViewed(Array.isArray(recent) ? recent : [])
        setWeeklyDiscounts(Array.isArray(weekly) ? weekly : [])
      })
      .catch(() => {
        setRecentlyViewed([])
        setWeeklyDiscounts([])
      })
  }, [])

  return (
    <main className="w-full px-4 md:px-8 py-8 space-y-12">
      <QuickCategories />
      <HeroBento />
      <TrustBar />

      {recentlyViewed.length > 0 && (
        <ProductsSection
          title="Recently Viewed"
          actionLabel="View All"
          actionPath="/grocery"
          products={recentlyViewed.slice(0, 5)}
        />
      )}

      {weeklyDiscounts.length > 0 && (
        <ProductsSection
          title="Weekly Discounts"
          actionLabel="All Products"
          actionPath="/grocery"
          products={weeklyDiscounts.slice(0, 5)}
        />
      )}
    </main>
  )
}

export default Home
