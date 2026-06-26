import '../css/links.css'

export default function LinksPage() {
  return (
    <>
      <h2>Links &amp; Pseudo-classes</h2>
      <p>
        <a href="#">Default link — text-decoration: none; cursor: not-allowed; color: red</a>
      </p>
      <p>
        <a href="https://example.com">Visited link — :visited sets color: purple</a>
      </p>
      <p>
        Hover any link to trigger the <code>:hover</code> pseudo-class (color: green wins
        because it appears last in the stylesheet — cascade order).
      </p>
      <p>
        <a href="#">Hover me</a>
      </p>
      <p>
        <a href="#">Hover me too</a>
      </p>
    </>
  )
}
