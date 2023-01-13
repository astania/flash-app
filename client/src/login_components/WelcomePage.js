import React from 'react'


const WelcomePage = ({ user }) => {

  return (
    <div>
      <h1>Welcome {user.email} to Flash App</h1>
      <p>To get started, </p>
    </div>
  )
}

export default WelcomePage