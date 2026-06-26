function Row({ className, children }: { label?: string; className: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 py-3 border-b border-gray-100 last:border-0">
      <code className="w-56 shrink-0 text-xs bg-gray-100 text-indigo-700 px-2 py-1 rounded font-mono">{className}</code>
      <span className={className}>{children}</span>
    </div>
  )
}

export default function Typography() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Typography</h1>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Font Size — <code className="text-sm">text-*</code></h2>
        {[
          ['text-xs', 'Extra Small (12px)'],
          ['text-sm', 'Small (14px)'],
          ['text-base', 'Base (16px)'],
          ['text-lg', 'Large (18px)'],
          ['text-xl', 'XL (20px)'],
          ['text-2xl', '2XL (24px)'],
          ['text-4xl', '4XL (36px)'],
          ['text-6xl', '6XL (60px)'],
        ].map(([cls, label]) => (
          <Row key={cls} label={label} className={cls}>{label}</Row>
        ))}
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Font Weight — <code className="text-sm">font-*</code></h2>
        {[
          ['font-thin', 'Thin (100)'],
          ['font-light', 'Light (300)'],
          ['font-normal', 'Normal (400)'],
          ['font-medium', 'Medium (500)'],
          ['font-semibold', 'Semibold (600)'],
          ['font-bold', 'Bold (700)'],
          ['font-extrabold', 'Extrabold (800)'],
          ['font-black', 'Black (900)'],
        ].map(([cls, label]) => (
          <Row key={cls} label={label} className={`text-xl ${cls}`}>{label}</Row>
        ))}
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Font Family — <code className="text-sm">font-*</code></h2>
        <Row label="font-sans" className="font-sans text-xl">The quick brown fox (sans-serif)</Row>
        <Row label="font-serif" className="font-serif text-xl">The quick brown fox (serif)</Row>
        <Row label="font-mono" className="font-mono text-xl">The quick brown fox (monospace)</Row>
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Line Height — <code className="text-sm">leading-*</code></h2>
        {[
          ['leading-none', 'None (1)'],
          ['leading-tight', 'Tight (1.25)'],
          ['leading-normal', 'Normal (1.5)'],
          ['leading-loose', 'Loose (2)'],
        ].map(([cls, label]) => (
          <Row key={cls} label={label} className={cls}>
            {label} — The quick brown fox jumps over the lazy dog.
          </Row>
        ))}
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Letter Spacing — <code className="text-sm">tracking-*</code></h2>
        {[
          ['tracking-tighter', 'Tighter'],
          ['tracking-tight', 'Tight'],
          ['tracking-normal', 'Normal'],
          ['tracking-wide', 'Wide'],
          ['tracking-wider', 'Wider'],
          ['tracking-widest', 'Widest'],
        ].map(([cls, label]) => (
          <Row key={cls} label={label} className={`text-lg ${cls}`}>{label} — HELLO WORLD</Row>
        ))}
      </section>

      <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Text Alignment &amp; Decoration</h2>
        <Row label="text-left" className="text-left block w-full">Left aligned text</Row>
        <Row label="text-center" className="text-center block w-full">Center aligned text</Row>
        <Row label="text-right" className="text-right block w-full">Right aligned text</Row>
        <Row label="underline" className="underline text-lg">Underlined text</Row>
        <Row label="line-through" className="line-through text-lg">Strikethrough text</Row>
        <Row label="italic" className="italic text-lg">Italic text</Row>
        <Row label="uppercase" className="uppercase text-lg">uppercase text</Row>
        <Row label="lowercase" className="lowercase text-lg">LOWERCASE TEXT</Row>
        <Row label="capitalize" className="capitalize text-lg">capitalize every word</Row>
      </section>
    </div>
  )
}
