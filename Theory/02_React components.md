# What are React Components?

A component in React is a reusable and independent piece of UI. React apps are built by combining multiple components.

There are two main types of components in React:

- **Functional Components (Preferred)** – Uses functions to define UI.
- **Class Components (Legacy)** – Uses ES6 classes (rarely used now).

## 🔹 1. Functional Components (Modern Approach)

A functional component is simply a JavaScript function that returns JSX.

### ✅ Example: Creating a Simple Component

```jsx
function Welcome() {
  return <h1>Hello, React! 🎉</h1>;
}
export default Welcome;
```

### 📌 Key Points:
- Components must start with an uppercase letter (`Welcome`, not `welcome`).
- They return JSX, which defines their UI.
- The `export default Welcome;` allows this component to be used elsewhere.

## 🔹 2. Using a Component Inside Another

We can reuse components inside other components.

### ✅ Example: Importing & Using a Component

```jsx
import Welcome from "./Welcome"; // Importing the component

function App() {
  return (
    <div>
      <Welcome />  {/* Using the component */}
      <p>This is a React component!</p>
    </div>
  );
}

export default App;
```

### 📌 Key Takeaways:
- Components are reusable.
- They are used like HTML tags: `<Welcome />`.

## 🔹 3. Props: Passing Data to Components

Props (short for "properties") allow us to pass data to a component.

### ✅ Example: Using Props in a Component

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}! 🎉</h1>;
}

export default Greeting;
```

Now, let’s pass a prop (`name`) when using `Greeting` inside `App.jsx`:

```jsx
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Alice" />
    </div>
  );
}

export default App;
```

### 📌 How it Works:
- `props.name` takes the value passed from the parent component.
- Now, `Greeting` can dynamically display different names.
