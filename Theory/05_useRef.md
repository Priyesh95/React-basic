# What is useRef?

`useRef` is a React hook that allows you to:

- ✅ Access and manipulate DOM elements directly
- ✅ Store values without causing re-renders

## 📌 Key Differences from useState

| Feature         | `useState` | `useRef` |
|----------------|-----------|----------|
| Triggers re-render? | ✅ Yes | ❌ No |
| Holds a value? | ✅ Yes | ✅ Yes |
| Modifies the DOM? | ❌ No | ✅ Yes |

## 🔹 1. Using useRef to Access the DOM

React usually manages the DOM automatically, but sometimes we need direct access (e.g., focusing an input field).

### ✅ Example: Auto-focus an Input Field

```jsx
import { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null); // Create a ref

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus on mount
  }, []);

  return <input ref={inputRef} type="text" placeholder="Type here..." />;
}

export default FocusInput;
```

### 📌 How It Works:
- `useRef(null)` creates a reference to the input field.
- `inputRef.current.focus();` gives direct access to the DOM element.
- The input gets auto-focused when the component loads.

## 🔹 2. Using useRef to Store Values Without Re-Renders

Unlike `useState`, `useRef` does not trigger re-renders when updated.

### ✅ Example: Tracking Render Counts Without Causing Re-Renders

```jsx
import { useRef, useState, useEffect } from "react";

function RenderCounter() {
  const countRef = useRef(0); // Stores value without re-rendering
  const [count, setCount] = useState(0);

  useEffect(() => {
    countRef.current += 1;
  });

  return (
    <div>
      <h2>Component Renders: {countRef.current}</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default RenderCounter;
```

### 📌 Key Takeaways:
- `useRef` stores values across renders.
- Unlike `useState`, updating `useRef` does not cause re-renders.
- Useful for tracking renders, storing previous values, or caching references.

## 🔹 3. Storing Previous State with useRef

We can use `useRef` to store the previous state before an update.

### ✅ Example: Tracking Previous State

```jsx
import { useRef, useState, useEffect } from "react";

function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // Store previous count
  }, [count]);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousStateExample;
```

### 📌 How It Works:
- On each render, `useEffect` updates `prevCountRef.current` with the last count value.
- We can display the previous state alongside the current state.
