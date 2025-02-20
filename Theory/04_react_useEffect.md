# 📌 What is useEffect?

`useEffect` is a React hook that allows you to perform side effects in functional components. Side effects include:

- Fetching data from an API 📡
- Updating the DOM manually
- Setting up event listeners
- Managing timers or intervals

## 🔹 1. Basic Usage of useEffect

The `useEffect` hook runs after the component renders.

### ✅ Example: Using useEffect Without Dependencies

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Component Rendered or Updated!");
  });

  return (
    <div>
      <h1>Time: {time}s</h1>
      <button onClick={() => setTime(time + 1)}>Increase Time</button>
    </div>
  );
}

export default Timer;
```

### 📌 How It Works:
- The `useEffect` runs every time the component renders or updates.
- If you click the button, the component updates → `useEffect` runs again.
- This is not efficient for tasks like API calls.

## 🔹 2. Using the Dependency Array (`[]`)

To control when `useEffect` runs, we use a dependency array.

### ✅ Example: Run useEffect Only Once (On Mount)

```jsx
useEffect(() => {
  console.log("Component Mounted!");
}, []); // Empty dependency array → Runs only on first render
```

### 📌 Key Takeaways:
- `[]` means it runs once when the component mounts.
- Useful for fetching data or setting up event listeners.

## 🔹 3. Handling API Calls with useEffect

Let's fetch data from a public API using `fetch()` inside `useEffect`.

### ✅ Example: Fetching Data from an API

```jsx
import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")  // Fetch users
      .then(response => response.json())
      .then(data => setUsers(data)); // Update state
  }, []);

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
```

### 📌 How It Works:
- On component mount, `useEffect` runs once (`[]` dependency).
- Fetches data from an API.
- Updates the state (`users`).
- The component re-renders with the fetched data.

## 🔹 4. Cleaning Up Effects

Some side effects, like timers or event listeners, need cleanup to prevent memory leaks.

### ✅ Example: Cleaning Up a Timer

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Runs only once

  return <h1>Time: {count}s</h1>;
}

export default Timer;
```

### 📌 Why?
- If the component unmounts, `clearInterval(interval)` stops the timer.
- Prevents memory leaks from unwanted background processes.


## Run useEffect on Specific State/Prop Changes
You can provide dependencies inside the array. The effect will only run when those values change.

✅ Example: Runs only when count changes

```
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);

```
### 📌 Use Case: Fetching new data when a state/prop changes.

