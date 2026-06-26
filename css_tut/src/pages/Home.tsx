import { Link } from 'react-router-dom'
import './Home.css'

const groups = [
  {
    label: 'Fundamentals',
    items: [
      { to: '/selectors', label: 'Selectors', desc: 'Element, class, ID, attribute & combinator selectors' },
      { to: '/display', label: 'Display', desc: 'block, inline, and inline-block behaviour' },
      { to: '/box-model', label: 'Box Model', desc: 'margin, padding, border, box-sizing' },
      { to: '/typography', label: 'Typography', desc: 'font-family, size, weight, line-height, text-*' },
      { to: '/css-units', label: 'CSS Units', desc: 'rem, em, %, ch, vh, dvh' },
      { to: '/links', label: 'Links', desc: ':visited, :hover, cursor pseudo-classes' },
      { to: '/lists', label: 'Lists', desc: 'list-style-type, :nth-child, ::marker' },
      { to: '/card', label: 'Card', desc: 'A styled card component demo' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { to: '/flexbox', label: 'Flexbox', desc: 'justify-content, align-items, flex-grow, gap' },
      { to: '/flexbox-project', label: 'Flexbox Project', desc: 'Full landing page built with flexbox + BEM' },
      { to: '/grid', label: 'CSS Grid', desc: 'grid-template, span, named areas' },
      { to: '/positioning', label: 'Positioning', desc: 'static, relative, absolute, fixed, sticky, z-index' },
    ],
  },
  {
    label: 'Responsive',
    items: [
      { to: '/media-queries', label: 'Media Queries', desc: '@media breakpoints for responsive layouts' },
      { to: '/css-functions', label: 'CSS Functions', desc: 'clamp(), min(), max(), calc()' },
      { to: '/aspect-ratio', label: 'Aspect Ratio', desc: 'aspect-ratio property for consistent sizing' },
      { to: '/object-fit', label: 'Object Fit', desc: 'object-fit and object-position for images' },
    ],
  },
  {
    label: 'Visual Effects',
    items: [
      { to: '/backgrounds', label: 'Backgrounds', desc: 'colors, gradients, background-size/position' },
      { to: '/shadows', label: 'Shadows', desc: 'box-shadow and text-shadow' },
      { to: '/transitions', label: 'Transitions', desc: 'Smooth property changes on hover' },
      { to: '/transforms', label: 'Transforms', desc: 'translate, rotate, scale, skew' },
      { to: '/pseudo-elements', label: 'Pseudo-elements', desc: '::before and ::after with content' },
      { to: '/overflow', label: 'Overflow', desc: 'hidden, scroll, auto, text-overflow ellipsis' },
    ],
  },
  {
    label: 'Advanced',
    items: [
      { to: '/variables', label: 'CSS Variables', desc: ':root custom properties and var()' },
      { to: '/nesting', label: 'CSS Nesting', desc: 'Nested selectors with & and @media' },
      { to: '/cascade-layers', label: 'Cascade Layers', desc: '@layer declaration order and specificity' },
    ],
  },
]

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">CSS Tutorial</h1>
      <p className="home-subtitle">
        26 interactive examples covering everything from selectors to cascade layers.
        Each page loads its own CSS file — explore the source in <code>src/css/</code>.
      </p>
      {groups.map((g) => (
        <section key={g.label} className="home-section">
          <h2 className="home-group-label">{g.label}</h2>
          <div className="home-grid">
            {g.items.map((item) => (
              <Link key={item.to} to={item.to} className="home-card">
                <h3 className="home-card-title">{item.label}</h3>
                <p className="home-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
