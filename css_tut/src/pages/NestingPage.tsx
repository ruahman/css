import '../css/nesting.css'

export default function NestingPage() {
  return (
    <>
      <h2>CSS Nesting</h2>
      <p>
        CSS nesting lets you write selectors inside other selectors.
        Use <code>&amp;</code> to refer to the parent selector.
      </p>

      <nav className="test-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#" className="login">Login</a></li>
        </ul>
      </nav>

      <div className="hero">
        <p>
          .hero uses <code>font-size: 1.25rem</code> and <code>padding: 10rem 0</code>.
          The <code>@media (min-width: 768px)</code> query is nested inside .hero —
          above 768px the font-size bumps to 1.5rem.
        </p>
      </div>
    </>
  )
}
