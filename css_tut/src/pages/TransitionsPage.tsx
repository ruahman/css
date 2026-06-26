import '../css/transitions.css'

export default function TransitionsPage() {
  return (
    <>
      <h2>Transitions</h2>
      <p>Hover each box to see the transition effect.</p>

      <div className="transition-grid">
        <div className="t-box t-color">
          background-color<br />0.4s ease
        </div>
        <div className="t-box t-scale">
          transform: scale<br />0.3s ease
        </div>
        <div className="t-box t-opacity">
          opacity<br />0.3s ease
        </div>
        <div className="t-box t-border">
          border-radius<br />0.4s ease
        </div>
        <div className="t-box t-multi">
          multiple properties<br />(color + rotate + radius)
        </div>
        <div className="t-box t-delay">
          transition-delay: 0.5s<br />(wait before animating)
        </div>
      </div>

      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#555' }}>
        Syntax: <code>transition: property duration timing-function delay</code>
      </p>
    </>
  )
}
