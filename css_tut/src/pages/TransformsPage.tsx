import '../css/transforms.css'

export default function TransformsPage() {
  return (
    <>
      <h2>Transforms</h2>
      <p>Transforms change an element&apos;s appearance without affecting document flow.</p>

      <div className="transform-grid">
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>translate(20px, -10px)</p>
          <div className="tr-box tr-translate">translate</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>rotate(45deg)</p>
          <div className="tr-box tr-rotate">rotate</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>scale(1.3)</p>
          <div className="tr-box tr-scale">scale</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>skew(15deg, 5deg)</p>
          <div className="tr-box tr-skew">skew</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>transform-origin: top left</p>
          <div className="tr-box tr-origin">origin</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>combined transforms</p>
          <div className="tr-box tr-combined">combined</div>
        </div>
      </div>
    </>
  )
}
