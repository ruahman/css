export default function Responsive() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Responsive Design</h1>
      <p className="text-gray-500">
        Tailwind uses a <strong>mobile-first</strong> approach. Unprefixed utilities apply to all sizes; prefixed ones apply at that breakpoint and above.
      </p>

      <div className="grid grid-cols-5 gap-2 text-center text-sm font-medium">
        {[
          { bp: 'default', range: '< 640px', color: 'bg-gray-200 text-gray-700' },
          { bp: 'sm:', range: '≥ 640px', color: 'bg-green-200 text-green-800' },
          { bp: 'md:', range: '≥ 768px', color: 'bg-blue-200 text-blue-800' },
          { bp: 'lg:', range: '≥ 1024px', color: 'bg-purple-200 text-purple-800' },
          { bp: 'xl:', range: '≥ 1280px', color: 'bg-orange-200 text-orange-800' },
        ].map(({ bp, range, color }) => (
          <div key={bp} className={`rounded-lg p-3 ${color}`}>
            <code className="block text-xs font-bold">{bp}</code>
            <span className="text-xs">{range}</span>
          </div>
        ))}
      </div>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Responsive Background Color</h2>
        <p className="text-sm text-gray-400 mb-4">Resize the browser window to see the color change at each breakpoint.</p>
        <div className="bg-gray-400 sm:bg-green-400 md:bg-blue-400 lg:bg-purple-400 xl:bg-orange-400 rounded-xl p-6 text-white text-center font-semibold">
          <code>bg-gray-400 sm:bg-green-400 md:bg-blue-400 lg:bg-purple-400 xl:bg-orange-400</code>
          <p className="mt-2 text-sm opacity-80">Current: gray (default) → green (sm) → blue (md) → purple (lg) → orange (xl)</p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Responsive Grid Columns</h2>
        <code className="text-xs text-indigo-600 mb-4 block">grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4</code>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-indigo-400 text-white rounded-lg p-4 text-center font-medium">
              Item {i + 1}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Responsive Text Size</h2>
        <code className="text-xs text-indigo-600 mb-4 block">text-sm sm:text-base md:text-xl lg:text-3xl xl:text-5xl</code>
        <p className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-gray-800">
          Hello, Tailwind!
        </p>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Responsive Show / Hide</h2>
        <div className="space-y-3">
          <div className="block sm:hidden bg-gray-100 rounded p-3 text-center text-sm">
            Visible only on <strong>mobile</strong> — <code>block sm:hidden</code>
          </div>
          <div className="hidden sm:block md:hidden bg-green-100 rounded p-3 text-center text-sm">
            Visible only on <strong>sm</strong> — <code>hidden sm:block md:hidden</code>
          </div>
          <div className="hidden md:block lg:hidden bg-blue-100 rounded p-3 text-center text-sm">
            Visible only on <strong>md</strong> — <code>hidden md:block lg:hidden</code>
          </div>
          <div className="hidden lg:block bg-purple-100 rounded p-3 text-center text-sm">
            Visible on <strong>lg+</strong> — <code>hidden lg:block</code>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Responsive Flex Direction</h2>
        <code className="text-xs text-indigo-600 mb-4 block">flex flex-col md:flex-row gap-3</code>
        <div className="flex flex-col md:flex-row gap-3">
          {['Sidebar', 'Main Content', 'Widget'].map((label, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 text-white text-center font-medium ${i === 1 ? 'md:flex-1 bg-indigo-500' : 'bg-indigo-300'}`}
            >
              {label}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
