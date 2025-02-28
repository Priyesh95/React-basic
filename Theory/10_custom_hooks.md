# Advanced Hooks & Custom Hooks in React

## 📌 Why Use Advanced Hooks?
React provides powerful built-in hooks to handle **complex state management**, **side effects**, and **reusable logic**. Advanced hooks like `useReducer` and **custom hooks** (`useAuth`, `useTheme`) improve code efficiency and maintainability.

---

## 🔹 1. `useReducer` for Complex State Management
`useReducer` is an alternative to `useState` that is useful when **state logic is complex** (e.g., multiple state transitions).

### **✅ Example: Counter with `useReducer`**
```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```
📌 **Why Use `useReducer`?**
- Better for **complex state logic** with multiple transitions.
- **Centralized state updates** using a reducer function.

---

## 🔹 2. Creating Custom Hooks
A **custom hook** is a function that **extracts reusable logic** to keep components clean and modular.

### **✅ Example: `useAuth` Hook for Authentication**
```jsx
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```
### **✅ Example: Using `useAuth` in a Component**
```jsx
import { useAuth } from "./useAuth";

function Profile() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("John Doe")}>Login</button>
      )}
    </div>
  );
}

export default Profile;
```
📌 **Why Use Custom Hooks?**
- Extracts **reusable logic** from components.
- Keeps components **clean and focused**.
- Encourages **better separation of concerns**.

---

## 🎯 Summary
✅ `useReducer` helps manage **complex state updates**.  
✅ Custom Hooks like `useAuth` make logic **reusable and modular**.  
✅ Hooks **improve performance and maintainability**.

---

## 🛠️ Mini Task: Create a "useTheme" Custom Hook
✅ **Your Task:**
1. Create a `useTheme.js` custom hook.
2. Manage a `theme` state (`light` or `dark`).
3. Implement a function to toggle the theme.
4. Use `useTheme` inside a `ThemeSwitcher` component.

---

## 🎯 Next Step: Building Our Resume-Worthy Project
Once you’ve completed the **custom hook task**, we’ll start implementing the **major project** with authentication, themes, and more! 🚀

