import { useVar } from 'orbitcode';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { History } from './History';
import './styles.css';

export default function App() {
  const [expression, setExpression] = useVar('calcExpression', '');
  const [result, setResult] = useVar('calcResult', '');
  const [history, setHistory] = useVar<string[]>('calcHistory', []);

  const handleKey = (key: string) => {
    if (key === 'C') {
      setExpression('');
      setResult('');
    } else if (key === '=') {
      try {
        const evalResult = Function(`"use strict"; return (${expression})`)();
        const resultStr = String(evalResult);
        setResult(resultStr);
        setHistory((h) => [`${expression} = ${resultStr}`, ...h.slice(0, 9)]);
      } catch {
        setResult('Error');
      }
    } else if (key === '⌫') {
      setExpression((e) => e.slice(0, -1));
    } else {
      setExpression((e) => e + key);
      setResult('');
    }
  };

  return (
    <div className="calculator-app">
      <div className="calculator">
        <Display expression={expression} result={result} />
        <Keypad onKey={handleKey} />
      </div>
      <History entries={history} />
    </div>
  );
}
