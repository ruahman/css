import '../css/flexbox.css'

export default function FlexboxPage() {
  return (
    <>
      <h1>Flexbox</h1>
      <h2>display: block — spans viewport width</h2>
      <h3>display: block — same</h3>

      <p>
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
        labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
        Nisi anim cupidatat excepteur officia.{' '}
        <strong>Reprehenderit</strong> nostrud nostrud ipsum Lorem est aliquip amet
        voluptate voluptate dolor minim nulla est proident.
        <button>Button (inline-block)</button> laboris sint cupidatat ullamco ut ea
        consectetur et est culpa et culpa duis.
      </p>

      <div className="container">
        <div className="item item-1">item 1 (order: 3)</div>
        <div className="item item-2">item 2 (order: 2)</div>
        <div className="item item-3">item 3 (order: 1)</div>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
        The container uses <code>display: flex; justify-content: center; align-items: center</code>.
        Items are reordered with the <code>order</code> property: item-3 appears first, item-2 second, item-1 last.
      </p>
    </>
  )
}
