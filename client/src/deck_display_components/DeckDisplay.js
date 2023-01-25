import React, { useState } from 'react'
import FlashCard from './FlashCard'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const DeckDisplay = ({ currentDeck }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState(currentDeck.cards[currentIndex])


    const handleNextClick = () => {
        if (currentIndex < currentDeck.cards.length - 1) {
            const newIndex = currentIndex + 1
            setCurrentIndex(newIndex)
            setCurrentCard(currentDeck.cards[newIndex])
        }

    }

    const handlePreviousClick = () => {
        if (currentIndex > 0 && currentIndex < currentDeck.cards.length) {
            const newIndex = currentIndex - 1
            setCurrentIndex(newIndex)
            setCurrentCard(currentDeck.cards[newIndex])
        }
    }

    return (
        <div>
            {currentDeck ? <Container >
                <h3>{currentDeck.name}</h3>
                {currentCard ? <FlashCard currentCard={currentCard} /> : <p>...loading</p>}
                <Button variant="secondary" onClick={() => handlePreviousClick()}>Previous</Button>
                
                <Button variant="secondary" onClick={() => handleNextClick()}>Next</Button>
                <p>{currentIndex + 1} of {currentDeck.cards.length}</p>
            </Container>

                : <p>...loading</p>}

        </div>
    )
}

export default DeckDisplay