import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import { deckRemoved } from './publicDecksSlice';
import { useDispatch } from 'react-redux';


const DeckContainer = ({ deck, setCurrentDeck, user, setUser }) => {
  const [isDeckSelected, setIsDeckSelected] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


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

  const handleDeleteClick = () => {
    dispatch(deckRemoved(deck.id))
    const updatedUserDecks = user.decks.filter(d => d.id !== deck.id)
    const updatedUser = { ...user }
    updatedUser.decks = updatedUserDecks
    
    fetch(`/decks/${deck.id}`, {
      method: "DELETE",
    }).then(() => setUser(updatedUser))
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
              <Button variant="secondary" onClick={handleDeleteClick} >Delete</Button>
            </Card.Text>
          </Card.Body>
        </Card> : ""}
      </div>
    </div>
  )
}

export default DeckContainer