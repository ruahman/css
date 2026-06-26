function Cell({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={`bg-indigo-400 text-white text-sm font-medium rounded flex items-center justify-center py-3 ${className}`}>
      {children}
    </div>
  )
}

export default function Grid() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Grid</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Grid Columns — <code className="text-sm">grid-cols-*</code></h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 6].map((cols) => (
            <div key={cols}>
              <code className="text-xs text-indigo-600 mb-2 block">grid grid-cols-{cols} gap-2</code>
              <div className={`grid grid-cols-${cols} gap-2`}>
                {Array.from({ length: cols * 2 }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Column Span — <code className="text-sm">col-span-*</code></h2>
        <div className="space-y-4">
          <div>
            <code className="text-xs text-indigo-600 mb-2 block">grid grid-cols-4 gap-2</code>
            <div className="grid grid-cols-4 gap-2">
              <Cell className="col-span-4">col-span-4</Cell>
              <Cell className="col-span-3">col-span-3</Cell>
              <Cell>1</Cell>
              <Cell className="col-span-2">col-span-2</Cell>
              <Cell className="col-span-2">col-span-2</Cell>
              <Cell>1</Cell>
              <Cell>1</Cell>
              <Cell>1</Cell>
              <Cell>1</Cell>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Row Span — <code className="text-sm">row-span-*</code></h2>
        <div>
          <code className="text-xs text-indigo-600 mb-2 block">grid grid-cols-3 grid-rows-3 gap-2</code>
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <Cell className="row-span-3 bg-indigo-600">row-span-3</Cell>
            <Cell>2</Cell>
            <Cell>3</Cell>
            <Cell className="row-span-2 col-span-2 bg-indigo-500">row-span-2 col-span-2</Cell>
            <Cell>7</Cell>
            <Cell>8</Cell>
            <Cell>9</Cell>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Gap — <code className="text-sm">gap-*, gap-x-*, gap-y-*</code></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { cls: 'gap-1', label: 'gap-1 (4px)' },
            { cls: 'gap-4', label: 'gap-4 (16px)' },
            { cls: 'gap-x-8 gap-y-2', label: 'gap-x-8 gap-y-2' },
          ].map(({ cls, label }) => (
            <div key={cls}>
              <code className="text-xs text-indigo-600 mb-2 block">{label}</code>
              <div className={`grid grid-cols-3 ${cls}`}>
                {Array.from({ length: 6 }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Auto Fit — <code className="text-sm">grid-cols-[repeat(auto-fit,minmax(...))]</code></h2>
        <code className="text-xs text-indigo-600 mb-2 block">grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-3</code>
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))' }}>
          {Array.from({ length: 7 }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
        </div>
        <p className="text-sm text-gray-400 mt-2">Resize the browser — columns reflow automatically</p>
      </section>
    </div>
  )
}
