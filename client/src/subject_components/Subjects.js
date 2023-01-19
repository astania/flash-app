import React from 'react'
import Subject from './Subject'
import CardGroup from 'react-bootstrap/CardGroup'


const SubjectsContainer = ({ subjects }) => {
  return (
    <CardGroup>
      {subjects.map(sub => <Subject key={sub.id} sub={sub} />)}
    </CardGroup>
  )
}

export default SubjectsContainer



