# What is State in React?

State is a built-in object in React that allows components to store and manage data dynamically. Unlike props, which are immutable (cannot be changed), state is mutable, meaning it can change over time.

## 🔹 1. Why Do We Need State?

Imagine you have a counter app. If we used props to display a number, we couldn't update it dynamically. State solves this problem by letting components "remember" values between renders.

### ✅ Example Without State (Incorrect)

```jsx
function Counter() {
  let count = 0; // Normal variable

  function increase() {
    count += 1;  // This won't update the UI
    console.log(count);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counter;
```

### 📌 Problem:
Clicking the button changes `count`, but the UI doesn't update because React doesn’t "track" normal variables.

## 🔹 2. Introducing useState Hook

To make state reactive, we use the `useState` hook.

### ✅ Correct Example Using useState

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Declare state variable

  function increase() {
    setCount(count + 1); // Update state
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counter;
```

### 📌 How It Works:

- `useState(0)` initializes `count` with `0`.
- `setCount(count + 1)` updates the state.
- When state updates, React automatically re-renders the component.

## 🔹 3. Updating State Based on Previous State

Sometimes, we need to update state based on the previous value.

### ✅ Example: Correct Way to Update State

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prevCount => prevCount + 1); // Always use previous state when needed
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counter;
```

### 📌 Why?

React batches multiple updates, and using `prevCount` ensures we always get the latest state.
