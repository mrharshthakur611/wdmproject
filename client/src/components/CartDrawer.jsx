import { useEffect, useMemo } from 'react'

function formatInr(value) {
  if (typeof value !== 'number') return ''
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function CartDrawer({ open, onClose, onViewCart, items }) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const { total, count } = useMemo(() => {
    const t = (items || []).reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const c = (items || []).reduce((sum, item) => sum + item.quantity, 0)
    return { total: t, count: c }
  }, [items])

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-on-background/20 backdrop-blur-sm z-[999] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose} 
      />
      
      {/* Drawer */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-surface-container-lowest shadow-2xl z-[1000] flex flex-col transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog" 
        aria-modal="true" 
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
          <div className="flex items-center gap-2 text-on-background">
            <span className="material-symbols-outlined text-primary text-[28px]">shopping_cart</span>
            <h2 className="font-headline-sm m-0 leading-tight">Your Cart</h2>
          </div>
          <button 
            type="button" 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high border-none cursor-pointer text-on-surface-variant" 
            onClick={onClose} 
            aria-label="Close cart drawer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items?.length ? (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30">
                <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0 flex items-center justify-center">
                   <img className="max-w-full max-h-full object-contain" src={item.imageUrl} alt={item.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[15px] text-on-background truncate">{item.name}</div>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-on-surface-variant text-[13px] font-medium">Qty: {item.quantity}</span>
                    <span className="text-primary font-bold text-[16px]">{formatInr(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-on-surface-variant mt-10">
              <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[40px] opacity-50">shopping_cart</span>
              </div>
              <p className="font-headline-sm m-0 text-on-background mb-2">Cart is empty</p>
              <p className="text-[14px]">Add some products to your cart.</p>
            </div>
          )}
        </div>

        {items?.length > 0 && (
          <div className="p-6 border-t border-outline-variant/30 bg-surface">
            <div className="flex justify-between items-center mb-4 text-[15px]">
              <span className="text-on-surface-variant font-medium">Subtotal ({count} items)</span>
              <span className="font-bold text-[20px] text-on-background">{formatInr(total)}</span>
            </div>
            <button 
              type="button" 
              className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold text-[16px] border-none cursor-pointer hover:brightness-95 transition-all shadow-md flex items-center justify-center gap-2" 
              onClick={onViewCart}
            >
              <span>View Full Cart</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
