import React from 'react'
import Card from 'react-bootstrap/Card';


const FlashCard = ({ currentCard }) => {

    return (
        <div>
            <Card className="text-center" style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>{currentCard.question}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FlashCard