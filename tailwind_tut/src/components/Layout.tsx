import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/typography', label: 'Typography' },
  { to: '/colors', label: 'Colors' },
  { to: '/spacing', label: 'Spacing' },
  { to: '/flexbox', label: 'Flexbox' },
  { to: '/grid', label: 'Grid' },
  { to: '/responsive', label: 'Responsive' },
  { to: '/states', label: 'States' },
  { to: '/animations', label: 'Animations' },
  { to: '/dark-mode', label: 'Dark Mode' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
    </div>
  )
}
