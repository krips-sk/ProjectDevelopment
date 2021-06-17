import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem]=useState({
    username:"Unknown",
    pwd:"Password"
  })
  Change=()=>{
    setItem({
      username:"YourWebsite",
    pwd:"12345678"
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>UserName:{item.username}</label>
        <label>Password:{item.pwd}</label>
        <button onClick={this.Change}>Onchange</button>
      </header>
    </div>
  );
}

export default App;
