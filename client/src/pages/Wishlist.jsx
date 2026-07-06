import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard'

function Wishlist() {
  const { wishlistItems } = useWishlist()

  return (
    <main className="w-full px-4 md:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex items-center gap-4 border-b-2 border-outline-variant/20 pb-4">
        <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined text-on-primary-container text-[32px]">favorite</span>
        </div>
        <div>
          <h2 className="font-headline-lg text-on-background m-0 leading-tight">Your Wishlist</h2>
          <p className="text-on-surface-variant text-label-md m-0">{wishlistItems.length} {wishlistItems.length === 1 ? 'Product' : 'Products'} saved</p>
        </div>
      </div>

      {/* Grid */}
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {wishlistItems.map((p) => (
            <div key={p.id} className="relative">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-on-surface-variant bg-surface-container-lowest rounded-xl border border-outline-variant/20">
          <div className="w-24 h-24 mx-auto bg-surface-container-low rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[48px] opacity-50">favorite_border</span>
          </div>
          <h3 className="font-headline-md text-on-background m-0 mb-2">Your wishlist is empty</h3>
          <p className="text-body-lg mb-8 max-w-md mx-auto">Save your favorite items here to find them quickly later. Start browsing our collection!</p>
          <Link to="/" className="inline-block px-8 py-3 bg-primary text-on-primary rounded-xl font-semibold no-underline hover:brightness-95 transition-all">
            Browse Products
          </Link>
        </div>
      )}
    </main>
  )
}

export default Wishlist
