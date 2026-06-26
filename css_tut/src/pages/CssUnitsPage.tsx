import '../css/css-units.css'

export default function CssUnitsPage() {
  return (
    <>
      <ul>
        <li>rem — relative to root (html) font-size (default 16px). Good for font sizes.</li>
        <li>em — relative to parent element font-size. Good for padding/margin.</li>
        <li>% — relative to parent element. Good for widths.</li>
      </ul>

      <button className="btn">Button — padding: 0.5em 1em (relative to button font-size)</button>

      <div className="hero">
        <div className="title">
          .hero uses height: 200dvh (device viewport height — accounts for mobile nav bar).
          .title inside uses height: 50% (relative to parent .hero).
        </div>
        <div className="description">
          .description uses max-width: 60ch — text is readable between 45 and 75 characters wide.
          ch is the width of the &ldquo;0&rdquo; character in the current font.
        </div>
      </div>
    </>
  )
}
