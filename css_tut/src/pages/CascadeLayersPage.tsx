import '../css/cascade-layers.css'

export default function CascadeLayersPage() {
  return (
    <>
      <h2>Cascade Layers</h2>
      <p>
        <code>@layer</code> lets you control cascade order explicitly.
        Layers declared <em>later</em> win over earlier ones — regardless of selector specificity.
      </p>

      <h3>Layer order demo</h3>
      <p>
        Three layers are declared: <code>@layer base, components, utilities;</code>
        <br />
        Each sets <code>color</code> on <code>.demo-text</code>:
        base → blue, components → green, utilities → red.
        <br />
        The last declared layer (<code>utilities</code>) wins → the text below is red.
      </p>
      <p className="demo-text">
        This text is red — utilities layer wins even though all three layers set a color.
      </p>

      <h3 style={{ marginTop: '1.5rem' }}>Unlayered styles beat all layers</h3>
      <p>
        Styles outside any <code>@layer</code> have the highest implicit priority.
        <code>.demo-override</code> sets <code>color: purple</code> outside any layer:
      </p>
      <p className="demo-text demo-override">
        This text is purple — unlayered styles beat all @layer declarations.
      </p>

      <h3 style={{ marginTop: '1.5rem' }}>Theme layers</h3>
      <p>
        Two layers both set <code>background</code> on <code>.layer-box</code>.
        <code>theme-a</code> → blue, <code>theme-b</code> → red.
        <code>theme-b</code> is declared after <code>theme-a</code> so it wins.
      </p>
      <div className="layer-box">
        This box is red (theme-b layer wins over theme-a).
      </div>
    </>
  )
}
