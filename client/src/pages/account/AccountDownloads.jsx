import { Link } from 'react-router-dom'

export default function AccountDownloads() {
  return (
    <div className="p-4 bg-primary-container text-on-primary-container rounded-xl border border-outline-variant/20">
      <div className="text-[13px] font-semibold">
        No downloads available yet.{' '}
        <Link to="/" className="underline text-on-primary-container">Browse Products</Link>
      </div>
    </div>
  )
}

