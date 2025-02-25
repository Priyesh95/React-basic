# 🚀 Lesson 6: React Router for Navigation

## 📌 Why Do We Need React Router?
React is a single-page application (SPA) framework, meaning it does not reload the page when switching views. Instead, we use **React Router** to create multiple pages and enable seamless navigation.

## 🔹 1. Installing React Router
To use React Router, install it via npm:

```bash
npm install react-router-dom
```
📌 This installs `react-router-dom`, which is the official React routing library.

## 🔹 2. Setting Up Basic Routing
We use **BrowserRouter**, **Routes**, and **Route** to define different pages in our app.

### ✅ Example: Creating a Multi-Page App

### **Step 1: Define Pages**
Create two new files inside `src/`:

#### 📄 Home.jsx

```jsx
function Home() {
  return <h1>🏠 Welcome to the Home Page</h1>;
}

export default Home;
```

#### 📄 About.jsx

```jsx
function About() {
  return <h1>ℹ️ This is the About Page</h1>;
}

export default About;
```

### **Step 2: Configure Routing in App.jsx**
Modify `App.jsx` to include routes:

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 📌 How It Works:
- `<Router>` wraps the entire app to enable routing.
- `<Routes>` groups all the routes.
- `<Route path="/" element={<Home />} />` maps `/` to the Home component.
- `<Route path="/about" element={<About />} />` maps `/about` to the About page.

## 🔹 3. Adding Navigation Links
Instead of manually typing URLs, we use `<Link>` to navigate between pages.

### ✅ Example: Adding a Navigation Menu
Modify `App.jsx`:

```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 📌 Why use `<Link>` instead of `<a>`?
- `<a href="/about">` **reloads the page**, which we don't want.
- `<Link to="/about">` **switches views without reloading** the app.

## 🔹 4. Using Dynamic Routes (`useParams`)
Sometimes, we need dynamic URLs to handle **user profiles, blog posts, etc.**

### ✅ Example: Creating a Dynamic Route

### **Step 1: Create a `User.jsx` Component**

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams(); // Get the dynamic value from the URL

  return <h1>👤 User Profile: {username}</h1>;
}

export default User;
```

### **Step 2: Add the Dynamic Route in `App.jsx`**

```jsx
import User from "./User"; 

<Route path="/user/:username" element={<User />} />
```

Now, visiting `/user/John` will display:

```sql
👤 User Profile: John
```
