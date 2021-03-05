import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import googlePhotos from 'googlephotos'

class PhotosIndex extends Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    
  }
}

export default withRouter(PhotosIndex)