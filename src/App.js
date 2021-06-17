import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem]=useState({
    username:"Unknown",
    pwd:"Password"
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>UserName:{item.username}</label>
        <label>Password:{item.pwd}</label>
      </header>
    </div>
  );
}

export default App;
