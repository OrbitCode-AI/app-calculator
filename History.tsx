import './History.css'

interface HistoryProps {
  entries: string[]
}

function History({ entries }: HistoryProps) {
  if (entries.length === 0) {
    return (
      <div className="history">
        <h3 className="history-title">History</h3>
        <p className="history-empty">No calculations yet</p>
      </div>
    )
  }

  return (
    <div className="history">
      <h3 className="history-title">History</h3>
      <ul className="history-list">
        {entries.map((entry, index) => (
          <li key={index} className="history-item">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Default export renders component in isolation for preview
export default function HistoryPreview() {
  const sampleHistory = ['123 + 456 = 579', '100 * 5 = 500', '999 / 3 = 333', '50 - 25 = 25']

  return (
    <div className="preview-container">
      <h3>Empty state:</h3>
      <History entries={[]} />
      <h3>With entries:</h3>
      <History entries={sampleHistory} />
    </div>
  )
}

export { History }
