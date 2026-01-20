import { Button, type ButtonVariant } from './Button';
import './Keypad.css';

interface KeyConfig {
  label: string;
  variant: ButtonVariant;
  wide?: boolean;
}

const keys: KeyConfig[][] = [
  [
    { label: 'C', variant: 'action' },
    { label: '⌫', variant: 'action' },
    { label: '%', variant: 'operator' },
    { label: '/', variant: 'operator' },
  ],
  [
    { label: '7', variant: 'number' },
    { label: '8', variant: 'number' },
    { label: '9', variant: 'number' },
    { label: '*', variant: 'operator' },
  ],
  [
    { label: '4', variant: 'number' },
    { label: '5', variant: 'number' },
    { label: '6', variant: 'number' },
    { label: '-', variant: 'operator' },
  ],
  [
    { label: '1', variant: 'number' },
    { label: '2', variant: 'number' },
    { label: '3', variant: 'number' },
    { label: '+', variant: 'operator' },
  ],
  [
    { label: '0', variant: 'number', wide: true },
    { label: '.', variant: 'number' },
    { label: '=', variant: 'equals' },
  ],
];

interface KeypadProps {
  onKey?: (key: string) => void;
}

function Keypad({ onKey }: KeypadProps) {
  return (
    <div className="keypad">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keypad-row">
          {row.map((key) => (
            <Button
              key={key.label}
              label={key.label}
              variant={key.variant}
              wide={key.wide}
              onClick={() => onKey?.(key.label)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// Default export renders component in isolation for preview
export default function KeypadPreview() {
  const handleKey = (key: string) => {
    alert(`Key pressed: ${key}`);
  };

  return (
    <div className="preview-container">
      <Keypad onKey={handleKey} />
    </div>
  );
}

export { Keypad };
