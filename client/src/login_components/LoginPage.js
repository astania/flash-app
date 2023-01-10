import React from 'react'
import LoginForm from './LoginForm'


const LoginPage = ({onLogin}) => {
  return (
    

    <div>
      <LoginForm onLogin={onLogin}/>
    </div>
  )
}

export default LoginPage