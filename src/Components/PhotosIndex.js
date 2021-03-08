import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import googlephotos from 'googlephotos'

class PhotosIndex extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      token: null,
      photos: [],
    }
  }

  
  
  render() {

    // const Photos = require('googlephotos')
    // const photos = new Photos(your_google_auth_token)
    
    console.log(this.props)

    return <h2>Index</h2>
  }
}

export default withRouter(PhotosIndex)