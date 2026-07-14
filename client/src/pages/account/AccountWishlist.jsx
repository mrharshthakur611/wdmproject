import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/WishlistContext'
import ProductCard from '../../components/ProductCard'

export default function AccountWishlist() {
  const { wishlistItems } = useWishlist()

  if (!wishlistItems.length) {
    return (
      <div className="p-4 bg-primary-container text-on-primary-container rounded-xl border border-outline-variant/20">
        <div className="text-[13px] font-semibold">
          Your wishlist is empty.{' '}
          <Link to="/" className="underline text-on-primary-container">Browse Products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-on-surface-variant text-[13px]">
        {wishlistItems.length} {wishlistItems.length === 1 ? 'product' : 'products'} saved
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map((p) => (
          <div key={p.id} className="relative">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  )
}

