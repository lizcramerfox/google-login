import React from 'react'
import Login from './Components/Login'
import Logout from './Components/Logout'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Google Login/Logout App</h2>
        <Login />
        <Logout />
      </header>
    </div>
  )
}

export default App
