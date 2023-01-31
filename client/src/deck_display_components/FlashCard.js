import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';


const FlashCard = ({ currentCard, setFlipToAnswer, flipToAnswer }) => {
    
    
    const handleClick = () => {
        setFlipToAnswer(!flipToAnswer)
    }

    return (
        <div>
            <Card onClick={handleClick} className="text-center flashcard" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>{flipToAnswer ? currentCard.answer : currentCard.question}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FlashCard