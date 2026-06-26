import '../css/box-model.css'

export default function BoxModelPage() {
  return (
    <>
      <h1>Box Model</h1>

      <h1>h1 — margin: 40px</h1>

      <div className="title-1">
        .title-1 — margin: 50px 25px 200px 50px; padding: 25px 50px
      </div>

      <button>button — all: unset; then custom padding + border + size</button>

      <div>
        div — width: 300px; height: 100px; padding: 16px; border: 5px solid black;
        margin: 50px (default box-sizing: content-box — border and padding ADD to size)
      </div>
    </>
  )
}
