## 📌 What is React?
React is a JavaScript library for building user interfaces (UIs). It was developed by Facebook (now Meta) and is widely used for building scalable and fast web applications.

## ⚡ Why Use React?
- **Component-Based**: React allows you to break the UI into reusable components.
- **Declarative**: You describe the UI, and React updates the DOM for you.
- **Virtual DOM**: React uses a lightweight virtual representation of the DOM to update only the necessary parts of the UI, improving performance.
- **Unidirectional Data Flow**: Makes state management predictable and easier to debug.
- **Strong Ecosystem**: Supported by tools like React Router, Redux, and a huge developer community.

## 🛠️ Setting Up a React Project
Before we write our first React component, we need to set up a React project. There are two main ways to do this:

### 🔹 Option 1: Using Vite (Recommended)
Vite is a faster and more efficient tool to set up a React project.

#### 📌 Run the following commands:

```bash
# Install Vite
npm create vite@latest my-react-app --template react

# Navigate into the project
cd my-react-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 🔹 Option 2: Using Create React App (CRA)
If you prefer, you can use Create React App (slower than Vite but still widely used).

#### 📌 Run the following command:

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

## 📝 Writing Your First React Component
After setting up the project, open `src/App.jsx` (or `src/App.js` in CRA). You'll see a default template. Let’s replace it with our own React component.

### ✅ Example: Simple React Component

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React! 🎉</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;
```

### 📌 How it works:
- `function App()` defines a functional component.
- It returns JSX, which looks like HTML but is actually JavaScript.
- The `<div>...</div>` is the component's UI structure.
- `export default App;` makes this component available to be used elsewhere.

## 📌 Understanding JSX (JavaScript XML)
JSX allows us to write HTML-like syntax inside JavaScript.

### ✅ Example of JSX Usage

```jsx
const message = "Welcome to React!";
return <h1>{message}</h1>;  // Using curly braces to insert JavaScript
```

### 📌 Key Points:
- JSX must return a single parent element.
- You can insert JavaScript expressions inside `{}`.
- Self-closing tags (`<img />`) are required for elements like `<img>` and `<br>`.
