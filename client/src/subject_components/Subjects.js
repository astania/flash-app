import React from 'react'
import Subject from './Subject'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'


const SubjectsContainer = ({ subjects, decks, currentSubject, setCurrentSubject }) => {

  // console.log("decks", decks)

  // console.log("math decks",mathDecks)
  // console.log("german decks", germanDecks)

  return (
    <Container>
      <CardGroup>
        {subjects.map(sub => <Subject key={sub.id} sub={sub} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} />)}
      </CardGroup>
    </Container>
  )
}

export default SubjectsContainer



