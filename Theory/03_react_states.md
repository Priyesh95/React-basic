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


# 🚀 How to Use `setState` for Objects in React

In React, when updating **state that contains objects**, you must ensure that you **do not mutate the existing state directly**. Instead, always create a new object using the **spread operator (`...`)** or **Object.assign()**.

---

## ✅ **1. Using `useState` with an Object**
```jsx
import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 25,
    email: "john@example.com",
  });

  function updateAge() {
    setUser({ ...user, age: user.age + 1 }); // ✅ Create a new object
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Age: {user.age}</h3>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
}

export default UserProfile;
```
📌 **Why Use `...user`?**
- `{ ...user, age: user.age + 1 }` creates a **new object** while keeping other properties unchanged.
- Directly modifying `user.age` **will not trigger re-renders**.

---

## ✅ **2. Updating Nested Objects (Deep Updates)**
For deeply nested state, use the **spread operator multiple times**.

```jsx
import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Alice",
    details: {
      age: 30,
      address: {
        city: "New York",
        zip: "10001",
      },
    },
  });

  function updateCity() {
    setUser({
      ...user,
      details: {
        ...user.details,
        address: {
          ...user.details.address,
          city: "Los Angeles",
        },
      },
    });
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>City: {user.details.address.city}</h3>
      <button onClick={updateCity}>Change City</button>
    </div>
  );
}

export default UserProfile;
```
📌 **Why Spread Multiple Times?**
- `{ ...user }` ensures a new object is created.
- `{ ...user.details }` ensures nested properties are also **properly updated**.
- `{ ...user.details.address, city: "Los Angeles" }` updates only the **city** without affecting other fields.

---

## ✅ **3. Updating State with Functions (Best Practice for Dependent Updates)**
If your new state depends on the **previous state**, always use the **functional form** of `setState`:

```jsx
function Counter() {
  const [counter, setCounter] = useState({ count: 0 });

  function increment() {
    setCounter(prevState => ({
      ...prevState,
      count: prevState.count + 1,
    }));
  }

  return (
    <div>
      <h1>Count: {counter.count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
📌 **Why Use Functional Updates?**
- If `setCounter({ ...counter, count: counter.count + 1 })` is used inside **multiple updates**, React might batch them incorrectly.
- `setCounter(prevState => {...})` ensures the most **up-to-date state is used**.

---

## ✅ **4. Merging Object State Instead of Overwriting**
By default, `setState` **replaces** the state instead of merging it. If you want to **merge updates dynamically**, use the spread operator:

```jsx
function UpdateProfile() {
  const [user, setUser] = useState({ name: "John", email: "john@example.com" });

  function updateEmail() {
    setUser(prevState => ({
      ...prevState,
      email: "newemail@example.com",
    }));
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  );
}
```
📌 **Key Takeaway:**  
- **Never use `setState({ email: "newemail@example.com" })`**, because it **removes all other properties**.
- Always spread (`...prevState`) to **keep existing properties**.

---

## 🔥 **Best Practices for Updating Object State in React**
| ✅ **Do This** | ❌ **Avoid This** |
|--------------|--------------|
| `setState(prev => ({ ...prev, key: value }))` | `setState({ key: value })` (removes other properties) |
| Use the **spread operator (`...prev`)** | Mutating state directly (`state.key = value`) |
| Use **functional updates (`prevState => {}`)** when the new state depends on the old one | Using `setState(newObject)` without spreading old values |

---

