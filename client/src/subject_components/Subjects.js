import React from 'react'
import Subject from './Subject'
import CardGroup from 'react-bootstrap/CardGroup'


const SubjectsContainer = ({ subjects, decks }) => {

  console.log("decks", decks)

  // console.log("math decks",mathDecks)
  // console.log("german decks", germanDecks)

  return (
    <CardGroup>
      {subjects.map(sub => <Subject key={sub.id} sub={sub} />)}
    </CardGroup>
  )
}

export default SubjectsContainer



