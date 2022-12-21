import React, {useState} from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginPage = ({onLogin}) => {
  const [isNewUser, setIsNewUser] = useState(false)
  return (
    

    <div>
      <LoginForm isNewUser={isNewUser} setIsNewUser={setIsNewUser} onLogin={onLogin}/>
      <SignupForm onLogin={onLogin}/>
    </div>
  )
}

export default LoginPage