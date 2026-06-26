const palette = [
  { name: 'slate', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'red', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'orange', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'yellow', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'green', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'teal', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'blue', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'indigo', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'purple', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'pink', shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
]

export default function Colors() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Colors</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Color Palette — <code className="text-sm">bg-{'{color}'}-{'{shade}'}</code></h2>
        <div className="space-y-2">
          {palette.map(({ name, shades }) => (
            <div key={name} className="flex gap-1 items-center">
              <span className="w-16 text-xs text-gray-500 capitalize">{name}</span>
              <div className="flex gap-1 flex-1">
                {shades.map((shade) => (
                  <div
                    key={shade}
                    className={`h-8 flex-1 rounded bg-${name}-${shade} flex items-end justify-center`}
                    title={`bg-${name}-${shade}`}
                  >
                    <span className={`text-[9px] pb-0.5 ${shade >= 500 ? 'text-white/70' : 'text-black/40'}`}>{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Text Colors — <code className="text-sm">text-{'{color}'}-{'{shade}'}</code></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500',
            'text-teal-500', 'text-blue-500', 'text-indigo-500', 'text-purple-500'].map((cls) => (
            <div key={cls} className="flex flex-col items-center gap-1">
              <span className={`text-2xl font-bold ${cls}`}>Aa</span>
              <code className="text-xs text-gray-500">{cls}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Border Colors — <code className="text-sm">border-{'{color}'}-{'{shade}'}</code></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['border-red-400', 'border-orange-400', 'border-yellow-400', 'border-green-400',
            'border-teal-400', 'border-blue-400', 'border-indigo-400', 'border-purple-400'].map((cls) => (
            <div key={cls} className={`border-4 rounded-lg p-3 ${cls} text-center`}>
              <code className="text-xs text-gray-600">{cls}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Gradients — <code className="text-sm">bg-gradient-to-* from-* via-* to-*</code></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { cls: 'bg-gradient-to-r from-pink-500 to-orange-400', label: 'bg-gradient-to-r from-pink-500 to-orange-400' },
            { cls: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500', label: 'from-blue-500 via-purple-500 to-pink-500' },
            { cls: 'bg-gradient-to-br from-green-400 to-teal-600', label: 'bg-gradient-to-br from-green-400 to-teal-600' },
            { cls: 'bg-gradient-to-b from-yellow-300 to-orange-500', label: 'bg-gradient-to-b from-yellow-300 to-orange-500' },
          ].map(({ cls, label }) => (
            <div key={cls} className={`h-20 rounded-xl ${cls} flex items-end p-2`}>
              <code className="text-xs text-white/90 bg-black/20 rounded px-2 py-0.5">{label}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Opacity — <code className="text-sm">bg-opacity-* / text-opacity-*</code></h2>
        <div className="flex gap-3 flex-wrap">
          {[10, 25, 50, 75, 90, 100].map((val) => (
            <div key={val} className="flex flex-col items-center gap-1">
              <div className={`w-16 h-16 rounded-lg bg-indigo-600 opacity-${val}`} />
              <code className="text-xs text-gray-500">opacity-{val}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
