# Performance Optimization in React

## 📌 Why Optimize Performance?
In large applications, unnecessary **re-renders** and **slow computations** can affect performance. React provides techniques to **optimize re-renders, caching, and code execution**.

---

## 🔹 1. Optimizing Components with `React.memo`
`React.memo` is a **higher-order component (HOC)** that **prevents unnecessary re-renders** when props don’t change.

### **✅ Example: Without `React.memo` (Inefficient)**
```jsx
import { useState } from "react";

function ChildComponent({ name }) {
  console.log("Child re-rendered!");
  return <h2>Hello, {name}!</h2>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent name="Alice" />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
```
📌 **Problem:**  
- The `ChildComponent` **re-renders every time** the `ParentComponent` updates, even if `name` **hasn't changed**.

---

### **✅ Optimized with `React.memo`**
```jsx
import { memo, useState } from "react";

const ChildComponent = memo(({ name }) => {
  console.log("Child re-rendered!");
  return <h2>Hello, {name}!</h2>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent name="Alice" />
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
```
📌 **Why This Works?**
- `React.memo()` **caches** the component.
- The `ChildComponent` **only re-renders when props change**.

---

## **🔹 2. Optimizing Functions with `useCallback`**
In React, functions are **recreated on every render**, causing unnecessary re-renders.

### **✅ Optimized with `useCallback`**
```jsx
import { useState, useCallback } from "react";

function Button({ handleClick }) {
  console.log("Button re-rendered!");
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const memoizedHandleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Button handleClick={memoizedHandleClick} />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
```
📌 **Why This Works?**
- `useCallback()` **caches the function** so it **doesn't recreate on every render**.
- This prevents **unnecessary re-renders** of `Button`.

---

## **🔹 3. Caching Values with `useMemo`**
`useMemo` **caches expensive calculations** to avoid **recomputing on every render**.

### **✅ Optimized with `useMemo`**
```jsx
import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("Running slow function...");
  return num * 2;
}

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const memoizedResult = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Result: {memoizedResult}</p>
    </div>
  );
}

export default App;
```
📌 **Why This Works?**
- `useMemo()` caches `slowFunction(number)`, so **it only runs when `number` changes**.

---

## **🛠️ Mini Task: Optimize a Counter App**
✅ **Your Task:**
1. Create a **`Counter.jsx`** component.
2. Implement a **button** to increment the counter.
3. Add an **expensive calculation** (e.g., factorial) and **optimize it using `useMemo()`**.

---

## 🎯 Next Step: Advanced Hooks & Custom Hooks
Once you've completed the **performance optimization task**, we’ll move on to **Advanced Hooks (`useReducer`, Custom Hooks like `useAuth`)**! 🚀