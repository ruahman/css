import '../css/style.css'

export default function SelectorsPage() {
  return (
    <>
      <h1>Hello World</h1>
      <h1 className="title">Hello World (class selector)</h1>
      <h1 className="title">Hello World (class selector)</h1>
      <h1 id="titleId">Hello World (ID selector)</h1>
      <a href="#">hello world (attribute selector)</a>
      <p>paragraph</p>
      <div>div</div>

      <h1 className="h1">adjacent sibling test</h1>
      <h2 className="h2">adjacent sibling (.h1 + .h2 → red)</h2>
      <h3 className="h3">general sibling (.h1 ~ .h3 → green)</h3>

      <div className="parent">
        <h4 className="h4">child selector (.parent &gt; .h4 → blue)</h4>
        <h5 className="h5">h5</h5>
        <h6 className="h6">h6</h6>
        <div>
          <h1 className="descendent">descendant selector (.parent .descendent → pink)</h1>
        </div>
      </div>
    </>
  )
}
