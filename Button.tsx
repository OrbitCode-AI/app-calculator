import './Button.css'

type ButtonVariant = 'number' | 'operator' | 'action' | 'equals'

interface ButtonProps {
  label: string
  variant?: ButtonVariant
  wide?: boolean
  onClick?: () => void
}

function Button({ label, variant = 'number', wide = false, onClick }: ButtonProps) {
  return (
    <button className={`calc-button ${variant} ${wide ? 'wide' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}

// Default export renders component in isolation for preview
export default function ButtonPreview() {
  return (
    <div className="preview-container">
      <h3>Button variants:</h3>
      <div className="preview-grid">
        <Button label="7" variant="number" />
        <Button label="+" variant="operator" />
        <Button label="C" variant="action" />
        <Button label="=" variant="equals" />
      </div>
      <h3>Wide button:</h3>
      <Button label="0" variant="number" wide />
    </div>
  )
}

export { Button }
export type { ButtonVariant }
