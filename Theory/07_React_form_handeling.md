# Handling Forms in React

## 📌 Why Do We Need Forms?
Forms allow users to **input and submit data** in React applications. React **controls form behavior** differently than traditional HTML forms.

---

## 🔹 1. Controlled vs. Uncontrolled Components
### ✅ Controlled Components (Recommended)
In a **controlled component**, React **controls the form data** by storing it in `state`.

### Example: Controlled Input Field
```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state with user input
  };

  return (
    <div>
      <h2>Controlled Input</h2>
      <input type="text" value={name} onChange={handleChange} />
      <p>Typed Name: {name}</p>
    </div>
  );
}

export default ControlledForm;
```
📌 **Key Takeaways:**
- The input **value is controlled by state**.
- React **re-renders** the component whenever input changes.

---

### ✅ Handling Form Submission
```jsx
import { useState } from "react";

function FormSubmission() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmission;
```
📌 **How It Works:**
1. `event.preventDefault()` prevents **page refresh**.
2. The form **stores input in `state`**.
3. On submit, an **alert shows the entered name**.

---

## 🔹 2. Handling Multiple Inputs
For forms with **multiple fields**, use a **single state object**.

### Example: Handling Multiple Inputs
```jsx
import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Update specific field
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
```
📌 **How It Works:**
- **`name` attribute** matches state keys.
- `setFormData({ ...formData, [name]: value })` **dynamically updates state**.

---

## 🔹 3. Uncontrolled Components (Using `useRef`)
An **uncontrolled component** uses **`useRef`** instead of state.

### Example: Uncontrolled Form (Using `useRef`)
```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Entered Name: ${nameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```
📌 **Key Takeaways:**
- `useRef` **accesses DOM elements directly**.
- The form **does not re-render** when input changes.

---

## 🔹 4. Form Validation
### Example: Simple Form Validation
```jsx
import { useState } from "react";

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address!");
    } else {
      setError("");
      alert(`Valid Email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default ValidatedForm;
```
📌 **How It Works:**
- Checks if the email **contains "@"** before allowing submission.
- Displays an **error message** if validation fails.

---

## 🎯 Summary
✅ **Controlled Components** use state for form inputs.
✅ **Uncontrolled Components** use `useRef` for form inputs.
✅ **Validation** ensures data correctness before submission.

---

## 🛠️ Mini Task: Create a "Login Form" Component
✅ **Your Task:**
1. Create a new file `LoginForm.jsx`.
2. Add **two input fields**: `username` and `password`.
3. On form submission:
   - Validate that **both fields are filled**.
   - If empty, show an **error message**.
   - If valid, display an **alert with "Login Successful"**.

---

## 🎯 Next Step: Context API for Global State Management
Let me know once you're done, and we'll move on to **Context API**! 🚀

