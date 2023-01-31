import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Subject = ({ sub, setCurrentSubject, currentSubject }) => {

    // const decks = useSelector(state => state.decks.entities)
    const navigate = useNavigate()


    const  handleClick = () => {
        setCurrentSubject(sub)
        navigate(`decks/${currentSubject.id}`)
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