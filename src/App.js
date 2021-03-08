import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import GoogleAuth from './Components/GoogleAuth'
import PhotosIndex from './Components/PhotosIndex'
import './App.css'
// import { render } from '@testing-library/react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      token: null,
    }
  }

  setToken = (token) => this.setState({ token })
  clearToken = () => this.setState({ token: null })

  render() {
    console.log(`in App, this.state = `, this.state)
    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>Google Photos App</h2>
            <nav>
              <ul>
                <Route path="/login" exact component={GoogleAuth} setToken={this.setToken} clearToken={this.clearToken} />
                <Link to="/index">Index</Link>
              </ul>
            </nav>
          </header>
          <main className="App-body">
            <Switch>
              {/* <Route exact path="/index" component={PhotosIndex} token={this.state.token} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}
  
export default App