import '../css/aspect-ratio.css'

export default function AspectRatioPage() {
  return (
    <>
      <h2>Aspect Ratio</h2>
      <p>
        <code>aspect-ratio</code> maintains a width-to-height ratio. Combined with
        a percentage <code>width</code>, the element scales responsively.
      </p>

      <div className="ar-grid">
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>aspect-ratio: 16 / 9</p>
          <div className="ar-box ar-16-9">16:9</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>aspect-ratio: 4 / 3</p>
          <div className="ar-box ar-4-3">4:3</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>aspect-ratio: 1 (square)</p>
          <div className="ar-box ar-1-1">1:1</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>aspect-ratio: 9 / 16 (portrait)</p>
          <div className="ar-box ar-9-16">9:16</div>
        </div>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>Responsive 16:9 container (width: 100%)</h3>
      <div className="ar-responsive">
        aspect-ratio: 16 / 9 — width: 100% — height auto-calculated
      </div>
    </>
  )
}
