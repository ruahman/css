import '../css/variables.css'

export default function VariablesPage() {
  return (
    <>
      <h2>CSS Variables (Custom Properties)</h2>
      <p>
        Variables are defined in <code>:root</code> (global scope) with
        double-dash prefix: <code>--dark</code>, <code>--light</code>.
      </p>

      <p>Default — background: var(--background) = #1a1a1a; color: var(--foreground) = #f2f2f2</p>

      <p className="blue">
        .blue class overrides <code>--background: blue</code> and{' '}
        <code>--foreground: red</code>. Variables are inherited — the{' '}
        <code>p</code> rule then reads the new local values via <code>var()</code>.
      </p>

      <p className="red">
        .red class overrides <code>--background: red</code> and{' '}
        <code>--foreground: blue</code>. This shows variable scoping — each element
        can define its own variable values that take effect for itself and its children.
      </p>

      <p>Back to default variables — dark background, light text.</p>
    </>
  )
}
