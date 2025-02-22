import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greeting from './Greetings';
import UserCard from './UserCard';
import Counter from './counter';
import Users from './Users';
import JokeFetcher from './JokeFetcher';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <div className="App">
      <Welcome />
      {/* <UserCard name = "John" age = "22" /> */}
      {/* <UserCard name = "Alice" age = "22" /> */}
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* <JokeFetcher /> */}
      <Stopwatch />
      <p>This is react component</p>
    </div>
  );
}

export default App;
