import React from 'react'
import flashcards from './flashcards.png'


const WelcomePage = ({user}) => {

  return (
  
    <div>
      {user ? <div>
      <h1>Welcome to Flash App!</h1>
      <img src={flashcards} alt="flashcards" height="400"></img>
      </div> : <p>...loading</p>}
      
    </div>
  )
}

export default WelcomePage