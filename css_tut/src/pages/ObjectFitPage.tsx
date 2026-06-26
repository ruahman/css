import '../css/object-fit.css'

const imgSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect width='400' height='250' fill='%234a90d9'/%3E%3Crect x='100' y='50' width='200' height='150' fill='white' opacity='0.2'/%3E%3Ccircle cx='200' cy='125' r='60' fill='white' opacity='0.3'/%3E%3Ctext x='200' y='132' text-anchor='middle' fill='white' font-size='18' font-family='sans-serif'%3EIMAGE 400x250%3C/text%3E%3C/svg%3E"

const variants = [
  { cls: 'of-fill', label: 'fill', desc: 'Stretches to fill (default — may distort)' },
  { cls: 'of-contain', label: 'contain', desc: 'Scales to fit — letterboxes if needed' },
  { cls: 'of-cover', label: 'cover', desc: 'Fills container — crops to maintain ratio' },
  { cls: 'of-none', label: 'none', desc: 'Uses natural size — may overflow' },
  { cls: 'of-scale-down', label: 'scale-down', desc: 'Like contain but never scales up' },
]

export default function ObjectFitPage() {
  return (
    <>
      <h2>Object Fit</h2>
      <p>
        Container is 200 × 150px. Image is 400 × 250px.
        <code>object-fit</code> controls how the image fills its box.
      </p>

      <div className="of-grid">
        {variants.map(({ cls, label, desc }) => (
          <div key={cls}>
            <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>
              <strong>{label}</strong> — {desc}
            </p>
            <div className={`of-container ${cls}`}>
              <img src={imgSrc} alt={label} />
            </div>
          </div>
        ))}
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>
            <strong>object-position: top center</strong> (with cover)
          </p>
          <div className="of-container of-position">
            <img src={imgSrc} alt="object-position demo" />
          </div>
        </div>
      </div>
    </>
  )
}
