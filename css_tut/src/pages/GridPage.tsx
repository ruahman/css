import '../css/grid.css'

export default function GridPage() {
  return (
    <>
      <h2>CSS Grid</h2>

      <h3>Basic grid — repeat(3, 1fr)</h3>
      <div className="grid-demo">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item grid-item--span2">4 — grid-column: span 2</div>
        <div className="grid-item">5</div>
        <div className="grid-item grid-item--span3">6 — grid-column: span 3</div>
      </div>

      <h3 style={{ marginTop: '2rem' }}>Named template areas</h3>
      <div className="grid-layout">
        <header className="grid-header">Header (grid-area: header)</header>
        <aside className="grid-sidebar">Sidebar (grid-area: sidebar)</aside>
        <main className="grid-main">
          Main content (grid-area: content) — spans 2 columns via template definition
        </main>
        <footer className="grid-footer">Footer (grid-area: footer)</footer>
      </div>
    </>
  )
}
