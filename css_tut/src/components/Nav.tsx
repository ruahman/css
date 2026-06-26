import { NavLink } from 'react-router-dom'
import './Nav.css'

const groups = [
  {
    label: 'Fundamentals',
    links: [
      { to: '/selectors', label: 'Selectors' },
      { to: '/display', label: 'Display' },
      { to: '/box-model', label: 'Box Model' },
      { to: '/typography', label: 'Typography' },
      { to: '/css-units', label: 'CSS Units' },
      { to: '/links', label: 'Links' },
      { to: '/lists', label: 'Lists' },
      { to: '/card', label: 'Card' },
    ],
  },
  {
    label: 'Layout',
    links: [
      { to: '/flexbox', label: 'Flexbox' },
      { to: '/flexbox-project', label: 'Flexbox Project' },
      { to: '/grid', label: 'CSS Grid' },
      { to: '/positioning', label: 'Positioning' },
    ],
  },
  {
    label: 'Responsive',
    links: [
      { to: '/media-queries', label: 'Media Queries' },
      { to: '/css-functions', label: 'CSS Functions' },
      { to: '/aspect-ratio', label: 'Aspect Ratio' },
      { to: '/object-fit', label: 'Object Fit' },
    ],
  },
  {
    label: 'Visual Effects',
    links: [
      { to: '/backgrounds', label: 'Backgrounds' },
      { to: '/shadows', label: 'Shadows' },
      { to: '/transitions', label: 'Transitions' },
      { to: '/transforms', label: 'Transforms' },
      { to: '/pseudo-elements', label: 'Pseudo-elements' },
      { to: '/overflow', label: 'Overflow' },
    ],
  },
  {
    label: 'Advanced',
    links: [
      { to: '/variables', label: 'CSS Variables' },
      { to: '/nesting', label: 'CSS Nesting' },
      { to: '/cascade-layers', label: 'Cascade Layers' },
    ],
  },
]

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-title">CSS Tutorial</NavLink>
      {groups.map((g) => (
        <div key={g.label} className="nav-group">
          <div className="nav-group-label">{g.label}</div>
          {g.links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      ))}
    </nav>
  )
}
