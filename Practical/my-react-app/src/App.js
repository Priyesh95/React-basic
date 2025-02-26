import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greetings';
import UserCard from './UserCard';
import Counter from './counter';
import Users from './Users';
import JokeFetcher from './JokeFetcher';
import Stopwatch from './Stopwatch';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import User from './User';
import ControllerForm from './ControllerForm';
import ThemeProvider from './ThemeProvider';
import ThemeTester from './ThemeTester';

function App() {
  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <UserCard name = "John" age = "22" /> */}
      {/* <UserCard name = "Alice" age = "22" /> */}
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* <JokeFetcher /> */}
      {/* <Stopwatch /> */}
      {/* <p>This is react component</p> */}
      {/* <Router>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/user/John">User</Link>
          
        </nav>
        <Routes>
          <Route path = "/home" element = {<Home />}></Route>
          <Route path = "/user/:username" element = {<User />}></Route>
        </Routes>
      </Router> */}
      {/* <ControllerForm /> */}

      <ThemeProvider>
        <ThemeTester />
      </ThemeProvider>
    </div>
  );
}

export default App;
