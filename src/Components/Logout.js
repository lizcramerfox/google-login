import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '655105447076-j69ngp9gmdhmck9stj5hjmspiqcu49i5.apps.googleusercontent.com'

function Logout() {
  const onSuccess = () => {
    alert('Logged out Successfully')
  }

  const onFailure = () => {
    alert('Failed to Log Out')
  }

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  )
}

export default Logout