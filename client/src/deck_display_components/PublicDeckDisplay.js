import React, { useState } from 'react'
import FlashCard from './FlashCard'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deckSaved } from '../public_decks_components/publicDecksSlice';

const PublicDeckDisplay = ({ currentDeck, setUser }) => {
    
    const currentUser = useSelector(state => state.user.entities)
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState(currentDeck.cards[currentIndex])
    const [flipToAnswer, setFlipToAnswer] = useState(false)
    const deckBelongsToUser = currentUser.decks.filter(deck => deck.id === currentDeck.id)

    const handleNextClick = () => {
        if (currentIndex < currentDeck.cards.length - 1) {
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex)
            setCurrentCard(currentDeck.cards[newIndex])
            setFlipToAnswer(false)
        }
    }

    const handlePreviousClick = () => {
        if (currentIndex > 0 && currentIndex < currentDeck.cards.length) {
            const newIndex = currentIndex - 1
            setCurrentIndex(newIndex)
            setCurrentCard(currentDeck.cards[newIndex])
            setFlipToAnswer(false)
        }
    }

    const handleSaveClick = () => {
        const updatedUsersArray = [...currentDeck.users, currentUser]
        const updatedDeck = {...currentDeck, users: updatedUsersArray}

        const updatedUserDeckArray = [...currentUser.decks, currentDeck]
        setUser({...currentUser, decks: updatedUserDeckArray})
        

        // dispatch(deckSaved({deck: updatedDeck, user: currentUser}))

    }

    return (
        <div>
            {currentDeck ? <Container className="text-center" >
                <h3>{currentDeck.name}</h3>
                {currentCard ? <FlashCard currentCard={currentCard} flipToAnswer={flipToAnswer} setFlipToAnswer={setFlipToAnswer} /> : <p>...loading</p>}
                <Button variant="secondary" onClick={() => handlePreviousClick()}>Previous</Button>
                <Button variant="secondary" onClick={() => handleNextClick()}>Next</Button>
                <p>{currentIndex + 1} of {currentDeck.cards.length}</p>
                <em><p>Click the card to see the answer!</p></em>
                {deckBelongsToUser.length === 0 ? <Button onClick={handleSaveClick} >Save Deck to Your Profile</Button> : ""}
            </Container>

                : <p>...loading</p>}

        </div>
    )
}

export default PublicDeckDisplay