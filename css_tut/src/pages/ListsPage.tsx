import '../css/lists.css'

export default function ListsPage() {
  return (
    <>
      <h2>Lists</h2>

      <h3>Ordered list — list-style-type: lower-greek</h3>
      <ol>
        <li>Alpha</li>
        <li>Beta</li>
        <li>Gamma</li>
        <li>Delta</li>
      </ol>

      <h3>Unordered list — list-style-type: square; text-align: center</h3>
      <ul>
        <li>First item</li>
        <li>Second item (red via :nth-child(2))</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ul>

      <h3>Unordered list with custom ::marker</h3>
      <ul id="m">
        <li>Item with blue &ldquo;test&rdquo; marker</li>
        <li>Item with blue &ldquo;test&rdquo; marker</li>
        <li>Item with blue &ldquo;test&rdquo; marker</li>
      </ul>
    </>
  )
}
