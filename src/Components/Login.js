import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = '655105447076-lvotoi4b5glipdtcfpl2hvd2hlmfndv4.apps.googleusercontent.com'

function Login() {
  const onSuccess = res => {
    console.log('[Login Success] currentUser: ', res.profileObj)
  }

  const onFailure = res => {
    console.log('[Login Failed] res: ', res )
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px'}}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login