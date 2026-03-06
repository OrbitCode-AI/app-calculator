# Calculator Template - Agent Guide

## Architecture

- **App.tsx** — Entry point. Owns all state (`expression`, `result`, `history`) via `useVar` from `orbitcode`. Contains `handleKey` logic for expression building, evaluation (via `Function()` constructor), and history tracking.
- **Display.tsx** — Pure presentational. Shows the current expression and result. Props: `expression`, `result`.
- **Keypad.tsx** — Renders a 5-row grid of buttons from a declarative `keys` config array. Emits key presses via `onKey` callback. Each key has a label and variant.
- **Button.tsx** — Individual calculator button. Supports four variants: `number`, `operator`, `action`, `equals`. Has an optional `wide` prop for the zero key.
- **History.tsx** — Displays a list of past calculations (most recent first, capped at 10). Shows an empty state when no history exists.

Data flows top-down: App holds state, passes props to Display/Keypad/History. Keypad calls `onKey` back to App. All persistent state uses `useVar` so expression, result, and history survive page reloads.

## Styling

- One `.css` file per component (`Button.css`, `Display.css`, `Keypad.css`, `History.css`) plus a shared `styles.css` for layout.
- Plain class names (not CSS modules). Button variants are applied as class names directly (e.g., `.calc-button.operator`).
- No CSS variables are used; colors and sizing are hardcoded in each CSS file.

## Extension Points

- Add new keys by appending entries to the `keys` array in `Keypad.tsx` with an appropriate `ButtonVariant`.
- Add scientific/advanced operations by extending the `handleKey` switch logic in `App.tsx`.
- Add new button variants by defining a new `ButtonVariant` type value in `Button.tsx` and styling it in `Button.css`.

## Constraints

- Expression evaluation uses `Function()` constructor — only safe for user-typed math, not arbitrary input.
