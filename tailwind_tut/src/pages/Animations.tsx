export default function Animations() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Animations &amp; Transitions</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Built-in Animations — <code className="text-sm">animate-*</code></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-indigo-500 rounded-full animate-spin" />
            <code className="text-xs text-indigo-600">animate-spin</code>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-pink-500 rounded-full animate-bounce" />
            <code className="text-xs text-indigo-600">animate-bounce</code>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className="w-12 h-12 bg-green-400 rounded-full animate-ping" />
              <div className="absolute w-12 h-12 bg-green-500 rounded-full" />
            </div>
            <code className="text-xs text-indigo-600">animate-ping</code>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full animate-pulse" />
            <code className="text-xs text-indigo-600">animate-pulse</code>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Skeleton Loading — <code className="text-sm">animate-pulse</code></h2>
        <div className="max-w-sm space-y-3">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-4/5" />
            </div>
          </div>
        </div>
        <code className="text-xs text-indigo-600 mt-4 block">animate-pulse on bg-gray-200 divs</code>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Transitions — <code className="text-sm">transition-* duration-* ease-*</code></h2>
        <p className="text-sm text-gray-400 mb-4">Hover over each button.</p>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-pink-500 transition-colors duration-300">
            transition-colors duration-300
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-pink-500 transition-colors duration-700">
            transition-colors duration-700
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:scale-125 transition-transform duration-300 ease-bounce">
            hover:scale-125 ease-bounce
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:translate-x-4 transition-transform duration-300">
            hover:translate-x-4
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:rotate-12 transition-transform duration-300">
            hover:rotate-12
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:opacity-50 transition-opacity duration-500">
            hover:opacity-50 duration-500
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Ease Curves — <code className="text-sm">ease-linear / ease-in / ease-out / ease-in-out</code></h2>
        <p className="text-sm text-gray-400 mb-4">Hover the rows to see the ball slide across.</p>
        <div className="space-y-4">
          {[
            { ease: 'ease-linear', label: 'ease-linear' },
            { ease: 'ease-in', label: 'ease-in' },
            { ease: 'ease-out', label: 'ease-out' },
            { ease: 'ease-in-out', label: 'ease-in-out' },
          ].map(({ ease, label }) => (
            <div key={ease} className="group">
              <code className="text-xs text-indigo-600 mb-1 block">{label}</code>
              <div className="bg-gray-100 rounded-full h-8 relative overflow-hidden">
                <div className={`absolute left-0 top-0 w-8 h-8 bg-indigo-500 rounded-full transition-transform duration-700 ${ease} group-hover:translate-x-[calc(100vw-4rem)]`} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
