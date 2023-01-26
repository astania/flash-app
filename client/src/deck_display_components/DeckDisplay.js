import React, { useState } from 'react'
import FlashCard from './FlashCard'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const DeckDisplay = ({ currentDeck }) => {
    console.log("in display", currentDeck)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCard, setCurrentCard] = useState(currentDeck.cards[currentIndex])
    const [flipToAnswer, setFlipToAnswer] = useState(false)


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

    return (
        <div>
            {currentDeck ? <Container className="text-center" >
                <h3>{currentDeck.name}</h3>
                {currentCard ? <FlashCard currentCard={currentCard} flipToAnswer={flipToAnswer} setFlipToAnswer={setFlipToAnswer} /> : <p>...loading</p>}
                <Button variant="secondary" onClick={() => handlePreviousClick()}>Previous</Button>
                <Button variant="secondary" onClick={() => handleNextClick()}>Next</Button>
                <p>{currentIndex + 1} of {currentDeck.cards.length}</p>
                <em><p>Click the card to see the answer!</p></em>
            </Container>

                : <p>...loading</p>}

        </div>
    )
}

export default DeckDisplay