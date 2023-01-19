import React from 'react'
import Subject from './Subject'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SubjectsContainer = ({ subjects }) => {
  return (


    <CardGroup>
      {subjects.map(sub => <Subject key={sub.id} sub={sub} />)}
    </CardGroup>


    // <Row xs={1} md={2} className="g-4">
    //   {Array.from(3).map((_, idx) => (
    //     <Col>
    //       {subjects.map(sub => <Subject key={sub.id} sub={sub} />)}
    //     </Col>
    //   ))}
    // </Row>



  )
}

export default SubjectsContainer



