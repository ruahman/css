export default function States() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">State Variants</h1>
      <p className="text-gray-500">Interact with the elements below to see the state variants in action.</p>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Hover — <code className="text-sm">hover:*</code></h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            hover:bg-indigo-700
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:border-indigo-500 hover:text-indigo-600 transition-colors">
            hover:border-indigo-500
          </button>
          <div className="px-4 py-2 bg-gray-100 rounded-lg hover:scale-110 transition-transform cursor-pointer text-gray-700">
            hover:scale-110
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-lg hover:shadow-xl transition-shadow cursor-pointer text-gray-700">
            hover:shadow-xl
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Focus — <code className="text-sm">focus:*</code></h2>
        <div className="flex flex-wrap gap-4">
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
            placeholder="focus:border-indigo-500 focus:ring-2"
          />
          <input
            className="px-3 py-2 border-2 border-transparent bg-gray-100 rounded-lg outline-none focus:border-pink-500 focus:bg-white transition-all"
            placeholder="focus:border-pink-500"
          />
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Active — <code className="text-sm">active:*</code></h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg active:scale-95 active:bg-indigo-800 transition-all">
            active:scale-95
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg active:translate-y-0.5 transition-transform">
            active:translate-y-0.5
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Disabled — <code className="text-sm">disabled:*</code></h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            disabled:opacity-50 (disabled)
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            enabled button
          </button>
          <input
            className="px-3 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            placeholder="disabled:bg-gray-100"
            disabled
          />
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Group Hover — <code className="text-sm">group / group-hover:*</code></h2>
        <p className="text-sm text-gray-400 mb-4">Hover over the card to trigger child animations via <code>group-hover:</code></p>
        <div className="group bg-gray-50 border border-gray-200 rounded-xl p-6 cursor-pointer hover:bg-indigo-50 hover:border-indigo-200 transition-colors max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 group-hover:bg-indigo-400 rounded-full transition-colors" />
            <div>
              <p className="font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">Card Title</p>
              <p className="text-sm text-gray-400 group-hover:text-indigo-400 transition-colors">Subtitle changes too</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500 group-hover:text-indigo-600 transition-colors">
            All children respond to the parent's hover via <code>group-hover:</code>
          </p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">First / Last / Odd / Even — <code className="text-sm">first:* last:* odd:* even:*</code></h2>
        <ul className="divide-y divide-gray-100">
          {['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'].map((item) => (
            <li
              key={item}
              className="py-2 px-3 odd:bg-gray-50 even:bg-white first:rounded-t-lg last:rounded-b-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        <code className="text-xs text-indigo-600 mt-2 block">odd:bg-gray-50 even:bg-white first:rounded-t-lg last:rounded-b-lg</code>
      </section>
    </div>
  )
}
