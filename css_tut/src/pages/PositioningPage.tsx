import '../css/positioning.css'

export default function PositioningPage() {
  return (
    <>
      <h2>Positioning</h2>

      <h3>static — default flow</h3>
      <div className="position-demo">
        <div className="pos-static">position: static (default — in normal flow)</div>
      </div>

      <h3>relative — offset from normal position</h3>
      <div className="position-demo">
        Normal text before.
        <span className="pos-relative">relative: top 20px, left 20px</span>
        Normal text after (space preserved).
      </div>

      <h3>absolute — removed from flow, relative to nearest positioned ancestor</h3>
      <div className="position-demo">
        <div className="pos-absolute">absolute: top 10px, right 10px</div>
        The parent div has <code>position: relative</code> — the absolute child
        positions relative to it.
      </div>

      <h3>sticky — sticks when scrolling</h3>
      <div className="pos-sticky-container">
        <div className="pos-sticky">sticky: top 0 — stays visible while scrolling</div>
        <p>Scroll this box to see the sticky header stay in place.</p>
        {Array.from({ length: 8 }).map((_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>z-index — stacking order</h3>
      <div className="z-container">
        <div className="z-box z-1">z-index: 1</div>
        <div className="z-box z-2">z-index: 2</div>
        <div className="z-box z-3">z-index: 3</div>
      </div>
    </>
  )
}
