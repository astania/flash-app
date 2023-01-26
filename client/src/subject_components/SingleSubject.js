import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleSubject = ({ currentSubject, setCurrentSubject, setCurrentDeck, decks }) => {
    const navigate = useNavigate()
    const subjectDecks = decks.filter(deck => deck.subjects.map(ds => ds.name).includes(currentSubject.name))
    console.log("subject decks", subjectDecks)
   

    const handleClick = (e) => {
        const deckId = e.target.value
        const selectedDeck = subjectDecks.find(deck => deck.id == deckId)
        setCurrentDeck(selectedDeck)
        navigate(`/study/${deckId}`)

    }

    return (
        <div>SingleSubject
            {subjectDecks.length > 0 ? subjectDecks.map(deck => <Button key={deck.id} onClick={handleClick} value={deck.id} >{deck.name}</Button>) : <p>No decks have been created for this subject</p>}
            {currentSubject.name}
        </div>
    )
}

export default SingleSubject