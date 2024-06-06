import React from 'react'
import googleSignin from '../../asserts/googleSignin.png';

const GoogleSignIn = () => {
  return (
   <>
    <h6 className='m-4 mb-2'> -- or continue with Google --</h6>
  <img className='ms-4 align-content-center' src= {googleSignin} width =" 200px"/>
   </>
  )
}

export default GoogleSignIn;