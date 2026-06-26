function Demo({ label, className, count = 3 }: { label: string; className: string; count?: number }) {
  return (
    <div>
      <code className="text-xs text-indigo-600 mb-2 block">{label}</code>
      <div className={`bg-indigo-50 rounded-lg p-2 border border-indigo-100 ${className}`} style={{ minHeight: '3.5rem' }}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} className="bg-indigo-400 text-white text-sm font-medium rounded px-3 py-2 flex items-center justify-center">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Flexbox() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Flexbox</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Direction — <code className="text-sm">flex-row / flex-col</code></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Demo label="flex flex-row gap-2" className="flex flex-row gap-2" />
          <Demo label="flex flex-row-reverse gap-2" className="flex flex-row-reverse gap-2" />
          <Demo label="flex flex-col gap-2" className="flex flex-col gap-2" />
          <Demo label="flex flex-col-reverse gap-2" className="flex flex-col-reverse gap-2" />
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Justify Content — <code className="text-sm">justify-*</code></h2>
        <div className="space-y-3">
          {[
            'justify-start', 'justify-center', 'justify-end',
            'justify-between', 'justify-around', 'justify-evenly',
          ].map((cls) => (
            <Demo key={cls} label={`flex ${cls} gap-2`} className={`flex ${cls} gap-2`} />
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Align Items — <code className="text-sm">items-*</code></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['items-start', 'items-center', 'items-end', 'items-stretch', 'items-baseline'].map((cls) => (
            <div key={cls}>
              <code className="text-xs text-indigo-600 mb-2 block">{cls}</code>
              <div className={`flex ${cls} gap-2 bg-indigo-50 rounded-lg p-2 border border-indigo-100 h-20`}>
                <div className="bg-indigo-400 text-white text-sm rounded px-3 py-1">A</div>
                <div className="bg-indigo-500 text-white text-sm rounded px-3 py-3">B</div>
                <div className="bg-indigo-600 text-white text-sm rounded px-3 py-5">C</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Flex Wrap — <code className="text-sm">flex-wrap / flex-nowrap</code></h2>
        <div className="space-y-4">
          <Demo label="flex flex-nowrap gap-2 (overflows)" className="flex flex-nowrap gap-2 overflow-x-auto" count={8} />
          <Demo label="flex flex-wrap gap-2" className="flex flex-wrap gap-2" count={8} />
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Grow &amp; Shrink — <code className="text-sm">flex-1 / flex-auto / flex-none / grow / shrink</code></h2>
        <div className="space-y-4">
          <div>
            <code className="text-xs text-indigo-600 mb-2 block">flex gap-2 — children with flex-none / flex-1 / flex-1</code>
            <div className="flex gap-2 bg-indigo-50 rounded-lg p-2 border border-indigo-100">
              <div className="flex-none bg-indigo-300 text-white text-sm rounded px-3 py-2">flex-none</div>
              <div className="flex-1 bg-indigo-400 text-white text-sm rounded px-3 py-2 text-center">flex-1</div>
              <div className="flex-1 bg-indigo-500 text-white text-sm rounded px-3 py-2 text-center">flex-1</div>
            </div>
          </div>
          <div>
            <code className="text-xs text-indigo-600 mb-2 block">flex gap-2 — basis-1/4, basis-1/2, basis-1/4</code>
            <div className="flex gap-2 bg-indigo-50 rounded-lg p-2 border border-indigo-100">
              <div className="basis-1/4 bg-indigo-300 text-white text-sm rounded px-3 py-2 text-center">1/4</div>
              <div className="basis-1/2 bg-indigo-400 text-white text-sm rounded px-3 py-2 text-center">1/2</div>
              <div className="basis-1/4 bg-indigo-500 text-white text-sm rounded px-3 py-2 text-center">1/4</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
