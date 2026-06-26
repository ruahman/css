import { Link } from 'react-router-dom'

const features = [
  { to: '/typography', label: 'Typography', desc: 'Font size, weight, family, line-height, letter-spacing', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { to: '/colors', label: 'Colors', desc: 'Color palette, text/bg/border colors, gradients', color: 'bg-pink-100 text-pink-700 border-pink-200' },
  { to: '/spacing', label: 'Spacing', desc: 'Padding, margin, gap with visual examples', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { to: '/flexbox', label: 'Flexbox', desc: 'flex-direction, justify, align, wrap, grow/shrink', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { to: '/grid', label: 'Grid', desc: 'grid-cols, col-span, row-span, gap', color: 'bg-green-100 text-green-700 border-green-200' },
  { to: '/responsive', label: 'Responsive', desc: 'sm/md/lg/xl breakpoints — resize to see changes', color: 'bg-teal-100 text-teal-700 border-teal-200' },
  { to: '/states', label: 'States', desc: 'hover:, focus:, active:, disabled:, group-hover:', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { to: '/animations', label: 'Animations', desc: 'animate-spin, bounce, ping, pulse and transitions', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { to: '/dark-mode', label: 'Dark Mode', desc: 'dark: variant with a live toggle button', color: 'bg-gray-100 text-gray-700 border-gray-200' },
]

export default function Home() {
  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Tailwind CSS Tutorial</h1>
        <p className="text-lg text-gray-500">Interactive demos for each core Tailwind feature</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ to, label, desc, color }) => (
          <Link
            key={to}
            to={to}
            className={`block border rounded-xl p-5 hover:shadow-md transition-shadow ${color}`}
          >
            <h2 className="text-lg font-semibold mb-1">{label}</h2>
            <p className="text-sm opacity-80">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
