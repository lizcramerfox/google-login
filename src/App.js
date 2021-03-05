import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GoogleAuth from './Components/GooogleAuth'
// import PhotosIndex from './Components/PhotosIndex'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Google Photos App</h2>
          <GoogleAuth />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={GoogleAuth} />
            {/* <Route exact path="/index" component={PhotosIndex} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App