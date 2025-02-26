# Context API in React

## 📌 What is Context API?
The **Context API** is a built-in feature in React that allows you to **manage global state** without **prop drilling**.

### 🔹 Why Use Context API?
✅ Avoids passing props through multiple levels (prop drilling)
✅ Ideal for **theme settings, user authentication, global data**
✅ Cleaner & scalable state management

---

## 🔹 1. Creating and Using Context
To use Context API, follow these steps:

### **✅ Step 1: Create a Context**
```jsx
import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
```
📌 **Creates a context (`ThemeContext`)** that will hold the global state.

---

### **✅ Step 2: Provide Context in a Wrapper Component**
```jsx
import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
```
📌 **How It Works:**
- `ThemeProvider` **wraps** the entire app.
- **Stores `theme` state** globally.
- **Provides `theme` and `setTheme`** to all components.

---

### **✅ Step 3: Wrap Your App with `ThemeProvider`**
Modify `App.jsx`:
```jsx
import ThemeProvider from "./ThemeProvider";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
```
📌 **Now, all components inside `ThemeProvider` can access the `theme` state.**

---

### **✅ Step 4: Consuming Context (`useContext`)**
Use the **`useContext`** hook to access the context value inside a component.

**Example: Home.jsx**
```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Home;
```
📌 **How It Works:**
- `useContext(ThemeContext)` **accesses** global state.
- **Dynamically changes the theme** when the button is clicked.

---

## 🎯 Summary
✅ **Context API removes the need for prop drilling**.
✅ **`useContext`** allows components to consume the context.
✅ **Ideal for global state like themes, authentication, user data**.

---

## 🛠️ Mini Task: Create a "User Authentication Context"
✅ **Your Task:**
1. Create `AuthContext.jsx`.
2. Store a `user` object in the context (e.g., `{ name: "John Doe" }`).
3. Create an `AuthProvider.jsx` component.
4. Use `useContext(AuthContext)` inside `Profile.jsx` to display the user’s name.

---

## 🎯 Next Step: Performance Optimization in React
Once you’re done, we’ll move on to **Performance Optimization (`React.memo`, `useCallback`, `useMemo`)** to make apps faster! 🚀

