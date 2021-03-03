import React from 'react'
import GoogleAuth from './Components/GooogleAuth'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Google Login/Logout App</h2>
        <GoogleAuth />
      </header>
    </div>
  )
}

export default App
