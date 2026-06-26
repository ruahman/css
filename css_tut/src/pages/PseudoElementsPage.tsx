import '../css/pseudo-elements.css'

export default function PseudoElementsPage() {
  return (
    <>
      <h2>Pseudo-elements</h2>
      <p>
        <code>::before</code> and <code>::after</code> insert generated content
        before/after an element using the <code>content</code> property.
      </p>

      <h3>Decorative quote (::before)</h3>
      <blockquote className="blockquote">
        Most software is accurate but hard to use. We make the opposite tradeoff
        and hope you appreciate the simplicity.
      </blockquote>

      <h3>Divider with text (::before + ::after)</h3>
      <div className="divider">OR</div>

      <h3>Badge overlay (::after)</h3>
      <div className="badge-wrap">Feature Button</div>

      <h3>Custom bullet list (::before on li)</h3>
      <ul className="custom-list">
        <li>Arrow bullet via ::before content: &lsquo;→&rsquo;</li>
        <li>No list-style needed</li>
        <li>Fully styleable with CSS</li>
        <li>Position: absolute relative to li</li>
      </ul>
    </>
  )
}
