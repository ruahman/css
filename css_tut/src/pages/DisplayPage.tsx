import '../css/display.css'

export default function DisplayPage() {
  return (
    <>
      <h1>display: block</h1>
      <h2>display: block — spans full width, pushes next element down</h2>
      <h3>display: block — same behaviour</h3>

      <p>
        This paragraph is <strong>display: inline</strong> — the strong element flows
        inside the line and cannot have width, height, or vertical margin applied.
        <button>display: inline-block</button> The button sits inline but respects
        width, height, and all margins.
      </p>

      <div className="container">
        <div className="item item-1">item 1 (flex child)</div>
      </div>
    </>
  )
}
