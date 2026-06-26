import '../css/typography.css'

export default function TypographyPage() {
  return (
    <div className="typography-content">
      <p>
        This paragraph demonstrates typography properties: Open Sans font family,
        line-height: 1.2, letter-spacing: 5px, text-decoration: underline red wavy 2px,
        text-align: right, and max-width: 60ch to keep readable line lengths.
        The max-width of 60ch means the text is capped at 60 character widths,
        which is the recommended readable range (45–75 characters per line).
      </p>
    </div>
  )
}
