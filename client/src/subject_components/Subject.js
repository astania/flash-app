import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Subject = ({ sub }) => {

    // const mathDecks = decks.filter(deck => deck.subjects.map(ds => ds.name).includes('Mathematics'))
    // const germanDecks = decks.filter(deck => deck.subjects.map(ds => ds.name).includes('German Language'))
    // const movieDecks = decks.filter(deck => deck.subjects.map(ds => ds.name).includes('Movies'))
    // const englishDecks = decks.filter(deck => deck.subjects.map(ds => ds.name).includes('English Language'))


    const handleClick = () => {
        console.log("click")
    }

    return (
        <div>
            <div className="col-sm-6 col-lg-4">
                    <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Body>
                            <Card.Title>{sub.name}</Card.Title>
                            <Button onClick={handleClick} variant="outline-primary">See all {sub.name} Decks</Button>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    )
}

export default Subject