import '../css/card.css'

export default function CardPage() {
  return (
    <div className="card">
      <p className="name">Design Engineer</p>
      <h2 className="title">Build something people want</h2>
      <p className="description">
        Most software is accurate but hard to use. We make the opposite tradeoff
        and hope you appreciate the simplicity over the feature list.
      </p>
      <button className="btn">Get started</button>
    </div>
  )
}
