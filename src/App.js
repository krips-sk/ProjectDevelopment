import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState({
    username: "Unknown",
    pwd: "Password"
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>UserName:{item.username}</label>
        <label>Password:{item.pwd}</label>
        <button varient="primary" onClick={() => setItem({
          username: "YourWebsite",
          pwd: "12345678"
        })}>Change URL</button>
      </header>
    </div>
  );
}

export default App;
