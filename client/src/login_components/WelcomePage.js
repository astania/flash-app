import React from 'react'
import flashcards from './flashcards.png'


const WelcomePage = () => {

  return (
    <div>
      <h1>Welcome to Flash App!</h1>
      <img src={flashcards} alt="flashcards" height="400"></img>
      <p>To get started, </p>

    </div>
  )
}

export default WelcomePage