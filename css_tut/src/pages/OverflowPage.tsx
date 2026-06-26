import '../css/overflow.css'

const longText =
  'This is a long paragraph that overflows its container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'

export default function OverflowPage() {
  return (
    <>
      <h2>Overflow</h2>

      <div className="overflow-demos">
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>overflow: visible (default)</p>
          <div className="overflow-box ov-visible">{longText}</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>overflow: hidden</p>
          <div className="overflow-box ov-hidden">{longText}</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>overflow: scroll</p>
          <div className="overflow-box ov-scroll">{longText}</div>
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>overflow: auto</p>
          <div className="overflow-box ov-auto">{longText}</div>
        </div>
      </div>

      <h3 style={{ marginTop: '1.5rem' }}>text-overflow</h3>
      <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>text-overflow: clip</p>
      <div className="text-overflow-demo">
        <p className="te-clip">This text is clipped — no indicator that content is cut off.</p>
      </div>
      <p style={{ fontSize: '0.8rem', marginBottom: '0.25rem', marginTop: '0.75rem' }}>text-overflow: ellipsis</p>
      <div className="text-overflow-demo">
        <p className="te-ellipsis">This text shows an ellipsis (...) when it overflows the container.</p>
      </div>
    </>
  )
}
