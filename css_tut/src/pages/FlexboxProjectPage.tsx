import '../css/flexbox-project.css'

export default function FlexboxProjectPage() {
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
          <button className="btn">Enter Allowed</button>
        </div>
      </header>

      <section className="hero container">
        <h1 className="hero__title">Accounting made simple for small businesses</h1>
        <p className="hero__description">
          Most bookkeeping software is accurate but hard to use, we make the
          opposite tradeoff and hope you don&apos;t get audited.
        </p>
        <a href="#features" className="btn">Learn more</a>
      </section>

      <section id="pricing" className="pricing container">
        <h2 className="pricing__title">Simple Transparent Pricing</h2>
        <p className="pricing__description">
          It doesn&apos;t matter what size your business is, our software
          won&apos;t work well for you.
        </p>
        <section className="pricing__container">
          {[
            { price: '9$', plan: 'Starter', desc: 'Good for anyone who is self employed', features: ['Send 10 quotes and invoices', 'Connect up to 2 bank accounts', 'Track up to 15 expenses per month', 'Manual payroll support', 'Export up to 3 reports'] },
            { price: '15$', plan: 'Business', desc: 'Perfect for small, medium businesses', features: ['foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar', 'foobar'] },
            { price: '39$', plan: 'Enterprise', desc: 'For even big companies', features: ['hello world', 'hello world', 'hello world', 'hello world', 'hello world'] },
          ].map((tier) => (
            <div key={tier.plan} className="pricing__box">
              <h3 className="pricing__price">{tier.price}</h3>
              <h4 className="pricing__plan">{tier.plan}</h4>
              <p className="pricing__plan-description">{tier.desc}</p>
              <button className="pricing__btn">Get started</button>
              <ul className="pricing__features">
                {tier.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          ))}
        </section>
      </section>

      <section id="features" className="features container">
        <h2 className="features__title">Everything you need to run your books</h2>
        <p className="features__description">
          Well, everything you need if you aren&apos;t that picky about tax compliance.
        </p>
        <div className="features__container">
          {['Payroll', 'Claim Expenses', 'VAT Handling', 'Reporting', 'Inventory'].map((name) => (
            <div key={name} className="features__box">
              <h3 className="features__box-title">{name}</h3>
              <p className="features__box-description">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
                enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact container">
        <h2 className="contact__title">Contact us</h2>
        <p className="contact__description">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
          labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
        </p>
        <a href="mailto:foo@bar.com" className="btn" target="_blank" rel="noreferrer">
          Reach out
        </a>
      </section>

      <footer className="footer container">
        <h2 className="footer__title">Slaying the Dragon</h2>
      </footer>
    </>
  )
}
