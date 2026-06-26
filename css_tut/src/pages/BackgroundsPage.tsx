import '../css/backgrounds.css'

export default function BackgroundsPage() {
  return (
    <>
      <h2>Backgrounds</h2>

      <p>background-color: #4a90d9</p>
      <div className="bg-demo bg-color">background-color</div>

      <p>linear-gradient(135deg, #4a90d9, #9b59b6)</p>
      <div className="bg-demo bg-linear">linear-gradient</div>

      <p>radial-gradient(circle, #f39c12, #e74c3c)</p>
      <div className="bg-demo bg-radial">radial-gradient</div>

      <p>linear-gradient with multiple color stops</p>
      <div className="bg-demo bg-multi-stop">multi-stop gradient</div>

      <p>background-image with SVG pattern — background-repeat: repeat; background-size: 60px</p>
      <div className="bg-demo bg-image">background-image + repeat</div>

      <p>background-size: cover; background-position: center</p>
      <div className="bg-demo bg-cover">background-size: cover</div>

      <p>background-repeat: no-repeat; background-position: top left; background-size: 100px</p>
      <div className="bg-demo bg-no-repeat">background-position + no-repeat</div>
    </>
  )
}
