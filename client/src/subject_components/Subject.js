import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Subject = ({ sub }) => {
    return (
        <div>
            <div className="col-sm-6 col-lg-4">
                <div className="card">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Title>{sub.name}</Card.Title>
                            <Button variant="primary">See all {sub.name} Decks</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Subject