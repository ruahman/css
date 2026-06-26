import '../css/media-queries.css'

export default function MediaQueriesPage() {
  return (
    <>
      <header className="header container">
        <h2 className="header__title">Slaying the Dragon</h2>
        <nav className="header__menu">
          <a className="header__link" href="#pricing">Pricing</a>
          <a className="header__link header__link--red" href="#features">Features</a>
          <a className="header__link" href="#contact">Contact</a>
        </nav>
        <div className="header__btn-container">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </header>

      <div className="container" style={{ marginTop: '2rem' }}>
        <h1>Responsive Header</h1>
        <p>
          Resize the browser window to see the breakpoints in action:
        </p>
        <ul>
          <li><strong>&le; 891px</strong> — header title shrinks to 1.2rem, links to 0.8rem</li>
          <li><strong>&le; 500px</strong> — h1 turns red</li>
        </ul>
        <p>
          The header uses BEM naming: <code>.header</code> (block),
          <code>.header__title</code> (element), <code>.header__link--red</code> (modifier).
        </p>
      </div>
    </>
  )
}
