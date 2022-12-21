import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'

const WelcomePage = ({ onLogout, user }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(user)).then(navigate("/"))
  }
  return (
    <div>WelcomePage

      <Button onClick={handleLogout}>logout</Button>
    </div>
  )
}

export default WelcomePage