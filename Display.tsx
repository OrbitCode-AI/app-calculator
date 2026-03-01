import './Display.css'

interface DisplayProps {
  expression: string
  result: string
}

function Display({ expression, result }: DisplayProps) {
  return (
    <div className="display">
      <div className="display-expression">{expression || '0'}</div>
      <div className={`display-result ${result ? 'visible' : ''}`}>{result && `= ${result}`}</div>
    </div>
  )
}

// Default export renders component in isolation for preview
export default function DisplayPreview() {
  return (
    <div className="preview-container">
      <h3>Empty state:</h3>
      <Display expression="" result="" />
      <h3>With expression:</h3>
      <Display expression="123 + 456" result="" />
      <h3>With result:</h3>
      <Display expression="123 + 456" result="579" />
      <h3>Error state:</h3>
      <Display expression="1 / 0" result="Infinity" />
    </div>
  )
}

export { Display }
