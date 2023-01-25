import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';


const DeckContainer = ({ deck, setCurrentDeck }) => {
  const [isDeckSelected, setIsDeckSelected] = useState(false)
  const navigate = useNavigate()


  // const handleDeckClick = () => {
  //   fetch(`/decks/${deck.id}`)
  //     .then((response) => {
  //       if (response.ok) {
  //         response.json().then((deckInfo) => console.log(deckInfo))
  //         .then(setDeck(true))
  //       }
  //     })
  // }

  const handleDeckClick = () => {
    setIsDeckSelected(!isDeckSelected)
  }

  const handleStudyClick = () => {
    setCurrentDeck(deck)
    navigate(`decks/${deck.id}`)
  }

  const handleEditClick = () => {
    setCurrentDeck(deck)
    navigate(`decks/${deck.id}/edit`)
  } 

  return (
    <div>
      <Button onClick={handleDeckClick}>{deck.name}</Button>
      <div>
        {isDeckSelected ? <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> {deck.name}</Card.Title>
            <Card.Text as="div">
              <Button variant="primary" onClick={handleStudyClick}>Study</Button>
              <Button variant="secondary" onClick={handleEditClick} >Edit</Button>
              <Button variant="secondary">Delete</Button>
            </Card.Text>
          </Card.Body>
        </Card> : ""}
      </div>
    </div>
  )
}

export default DeckContainer