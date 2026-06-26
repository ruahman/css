import { useEffect, useState } from 'react'

export default function DarkMode() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return () => document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dark Mode</h1>
        <button
          onClick={() => setDark(!dark)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors bg-gray-800 text-white hover:bg-gray-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300"
        >
          {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p className="text-gray-500 dark:text-gray-400">
        Tailwind's <code>dark:</code> variant applies styles when the <code>dark</code> class is on the <code>&lt;html&gt;</code> element.
        Toggle the button above to switch modes.
      </p>

      <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Card Component</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          This card uses <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-indigo-600 dark:text-indigo-400">dark:bg-gray-800</code> and{' '}
          <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded text-indigo-600 dark:text-indigo-400">dark:text-gray-200</code>.
        </p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-400 transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            Secondary
          </button>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Form Elements</h2>
        <div className="space-y-3 max-w-sm">
          <input
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            placeholder="dark:bg-gray-700 dark:text-white"
          />
          <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Common Dark Mode Classes</h2>
        <div className="space-y-2">
          {[
            ['dark:bg-gray-900', 'Page background'],
            ['dark:bg-gray-800', 'Card / surface'],
            ['dark:bg-gray-700', 'Input / elevated surface'],
            ['dark:text-white', 'Primary text'],
            ['dark:text-gray-300', 'Secondary text'],
            ['dark:text-gray-400', 'Muted text'],
            ['dark:border-gray-700', 'Subtle borders'],
            ['dark:border-gray-600', 'Input borders'],
          ].map(([cls, desc]) => (
            <div key={cls} className="flex items-center gap-3 py-1.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
              <code className="text-xs bg-gray-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded w-48 shrink-0">{cls}</code>
              <span className="text-sm text-gray-600 dark:text-gray-300">{desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
