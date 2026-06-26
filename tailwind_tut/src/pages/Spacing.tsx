function Box({ className, label }: { className: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="bg-indigo-100 rounded inline-block">
        <div className={`bg-indigo-400 rounded text-white text-xs flex items-center justify-center min-w-8 min-h-8 ${className}`}>
          box
        </div>
      </div>
      <code className="text-xs text-gray-500">{label}</code>
    </div>
  )
}

export default function Spacing() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Spacing</h1>
      <p className="text-gray-500">Blue area = element, light blue = padding. Margins create outer space between elements.</p>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Padding — <code className="text-sm">p-*, px-*, py-*, pt-*, pr-*, pb-*, pl-*</code></h2>
        <div className="flex flex-wrap gap-6">
          <Box className="p-0" label="p-0" />
          <Box className="p-1" label="p-1 (4px)" />
          <Box className="p-2" label="p-2 (8px)" />
          <Box className="p-4" label="p-4 (16px)" />
          <Box className="p-6" label="p-6 (24px)" />
          <Box className="p-8" label="p-8 (32px)" />
          <Box className="px-6 py-1" label="px-6 py-1" />
          <Box className="pt-6 pb-2" label="pt-6 pb-2" />
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Margin — <code className="text-sm">m-*, mx-*, my-*, mt-*, mr-*, mb-*, ml-*</code></h2>
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          {[0, 1, 2, 4, 6, 8, 'auto'].map((val) => (
            <div key={val} className="flex items-center gap-3">
              <code className="text-xs w-20 text-indigo-600 shrink-0">mx-{val}</code>
              <div className="flex-1 bg-gray-200 rounded h-6 relative">
                <div className={`bg-indigo-400 h-6 rounded mx-${val}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Gap — <code className="text-sm">gap-*, gap-x-*, gap-y-*</code></h2>
        <div className="space-y-6">
          {[0, 1, 2, 4, 6, 8].map((gap) => (
            <div key={gap}>
              <code className="text-xs text-indigo-600 mb-2 block">gap-{gap}</code>
              <div className={`flex gap-${gap}`}>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="flex-1 bg-indigo-400 text-white text-center text-sm py-2 rounded">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">Size — <code className="text-sm">w-*, h-*, size-*</code></h2>
        <div className="space-y-3">
          {[
            { cls: 'w-16 h-8', label: 'w-16 h-8' },
            { cls: 'w-32 h-8', label: 'w-32 h-8' },
            { cls: 'w-64 h-8', label: 'w-64 h-8' },
            { cls: 'w-full h-8', label: 'w-full h-8' },
            { cls: 'w-1/2 h-8', label: 'w-1/2 h-8' },
            { cls: 'size-16', label: 'size-16 (w=h=64px)' },
          ].map(({ cls, label }) => (
            <div key={cls} className="flex items-center gap-3">
              <code className="text-xs text-indigo-600 w-40 shrink-0">{label}</code>
              <div className={`bg-indigo-400 rounded text-white text-xs flex items-center justify-center ${cls}`}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
