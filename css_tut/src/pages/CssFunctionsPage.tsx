import '../css/css-functions.css'

export default function CssFunctionsPage() {
  return (
    <>
      <h2>CSS Functions</h2>

      <h3>clamp(min, preferred, max)</h3>
      <p className="clamp-title">
        Resize the window — this title clamps between 1.2rem and 3rem.
        <br />
        <code>font-size: clamp(1.2rem, 4vw, 3rem)</code>
      </p>
      <div className="clamp-box">
        <code>width: clamp(200px, 50%, 600px)</code>
        <br />
        This box is at least 200px, at most 600px, preferred 50% of parent.
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>min(a, b) — use the smaller value</h3>
      <div className="min-box">
        <code>width: min(100%, 400px)</code>
        <br />
        Never wider than 400px but shrinks on small screens.
      </div>

      <h3 style={{ marginTop: '1rem' }}>max(a, b) — use the larger value</h3>
      <div className="max-box">
        <code>width: max(200px, 30%)</code>
        <br />
        Always at least 200px wide.
      </div>

      <h3 style={{ marginTop: '1rem' }}>calc() — math expressions</h3>
      <div className="calc-box">
        <code>width: calc(100% - 4rem)</code>
        <br />
        Subtracts 4rem from 100% parent width — can mix units.
      </div>
    </>
  )
}
