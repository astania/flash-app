import React, { useState } from 'react'
import FlashCard from './FlashCard'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deckSaved } from '../public_decks_components/publicDecksSlice';

const DeckDisplay = ({ currentDeck, setUser, user }) => {
    // const currentUser = useSelector(state => state.user.entities)
    const [errors, setErrors] = useState([])
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState(currentDeck.cards[currentIndex])
    const [flipToAnswer, setFlipToAnswer] = useState(false)
    const deckBelongsToUser = user.decks.filter(deck => deck.id === currentDeck.id)
    

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
        const updatedUsersArray = [...currentDeck.users, user]
        const updatedDeck = {...currentDeck, users: updatedUsersArray}

        const updatedUserDeckArray = [...user.decks, currentDeck]
        const updatedUser = {...user, decks: updatedUserDeckArray}
    
        
        dispatch(deckSaved({deck: updatedDeck, user: updatedUser}))

        fetch(`/user_decks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({user_id: user.id, deck_id: currentDeck.id}),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(userInfo => setUser(userInfo))
                        .then(setErrors([]))

                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))

                }
            })

    }

    return (
        <div>
            {currentDeck.cards.length > 0 ? <Container className="text-center" >
                <h3>{currentDeck.name}</h3>
                {currentCard ? <FlashCard currentCard={currentCard} flipToAnswer={flipToAnswer} setFlipToAnswer={setFlipToAnswer} /> : <p>...loading</p>}
                <Button variant="secondary" onClick={() => handlePreviousClick()}>Previous</Button>
                <Button variant="secondary" onClick={() => handleNextClick()}>Next</Button>
                <p>{currentIndex + 1} of {currentDeck.cards.length}</p>
                <em><p>Click the card to see the answer!</p></em>
                {deckBelongsToUser.length === 0 ? <Button onClick={handleSaveClick} >Save Deck to Your Profile</Button> : ""}
                {errors}
            </Container>

                : <p>...loading</p>}

        </div>
    )
}

export default DeckDisplay