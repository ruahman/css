import '../css/shadows.css'

export default function ShadowsPage() {
  return (
    <>
      <h2>Shadows</h2>

      <h3>box-shadow</h3>
      <div className="shadow-grid">
        <div className="shadow-box s-basic">4px 4px 8px rgba(0,0,0,0.2)</div>
        <div className="shadow-box s-spread">0 0 0 4px #4a90d9 (spread only)</div>
        <div className="shadow-box s-inset">inset shadow</div>
        <div className="shadow-box s-multiple">multiple shadows</div>
        <div className="shadow-box s-colored">colored shadow</div>
        <div className="shadow-box s-lifted">hover for lift effect</div>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>text-shadow</h3>
      <p className="text-shadow-demo ts-basic">Basic text shadow</p>
      <p className="text-shadow-demo ts-glow">Glow effect</p>
      <p className="text-shadow-demo ts-multiple">3D stacked shadow</p>
    </>
  )
}
