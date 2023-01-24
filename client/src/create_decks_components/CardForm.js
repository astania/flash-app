import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const CardForm = ({ index, deckInput, setDeckInput }) => {
    const deckCopy = { ...deckInput }
    const [cardInput, setCardInput] = useState({ ...deckInput.cards[index] })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setCardInput({ ...cardInput, [name]: value })

        deckCopy.cards[index] = cardInput
        setDeckInput({ ...deckInput, cards: deckCopy.cards })
    }

    const handleDeleteClick = () => {
        const deckWithRemovedCard = deckInput.cards.filter(card => deckInput.cards.indexOf(card) !== index)
        deckCopy.cards = deckWithRemovedCard
        setDeckInput(deckCopy)
        setCardInput({ ...deckCopy.cards[index] })
    }

    return (
        <Container>
            <h5>Card #{index + 1}</h5>
            <Form.Group className="mb-3" >
                <Form.Label name="question">Question</Form.Label>
                <Form.Control as="textarea" name="question" value={cardInput.question} onChange={(e) => handleChange(e)} rows={3} placeholder="What is the Remainder of 27/3?" />

                <Form.Label name="answer">Answer</Form.Label>
                <Form.Control as="textarea" name="answer" value={cardInput.answer} onChange={(e) => handleChange(e)} rows={3} placeholder="Zero" />
            </Form.Group>
            <Button onClick={handleDeleteClick}>Delete Card</Button>
        </Container>
    )
}

export default CardForm


// const filteredDeck = deckInput.cards.map(card => card[index] !== index)
//         setDeckInput({...deckInput, ...deckInput.cards = filteredDeck})
//         console.log("should have deleted card", deckInput)