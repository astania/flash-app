import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardForm from './CardForm';
import Container from 'react-bootstrap/Container';

const CreateDecks = ({ subjects, user }) => {

  const blankCardTemplate = {
    question: "",
    answer: ""
  }

  const blankDeckTemplate = {
    name: "",
    subjects: "",
    public: true,
    cards: [blankCardTemplate]
  }

  const [deckInput, setDeckInput] = useState(blankDeckTemplate)
  const [errors, setErrors] = useState([])
  console.log(deckInput)

  const handleAddCardClick = () => {
    const updatedCards = [...deckInput.cards, blankCardTemplate]
    const updatedDeck = { ...deckInput, cards: updatedCards }
    setDeckInput(updatedDeck)
  }

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name

    if (e.target.type === "checkbox"){
      value = e.target.checked
    } 
  
    setDeckInput({...deckInput, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    deckInput.user_id = user.id
  
    fetch("/decks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deckInput),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(deckInfo => console.log(deckInfo))
        } else {
          res.json().then((errorData) => setErrors(errorData.errors))
        }
      })


  }

  return (
    <div>
      {user ? <Container style={{ width: '40rem' }}>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formName">
            <h3>Deck Name</h3>
          
            <Form.Control type="text" placeholder="Algebra 301 Chapter 4 Quiz" name="name" onChange={handleChange} value={deckInput.name}/>
            
            <Form.Label>Subject:</Form.Label>
            
            <Form.Select aria-label="subject" name="subjects" onChange={handleChange}>
              <option>Subject:</option>
              {subjects.map(subj => <option key={subj.id} value={parseInt(subj.id)}>{subj.name}</option>)}
            </Form.Select>

            <Form.Label>Do you want to make this deck public?</Form.Label>
            
            <Form.Check type="checkbox"  label="Yes" name="public" onChange={e => handleChange(e)} defaultChecked={true}/>
          
          </Form.Group>

          {deckInput.cards.map((card, index) => <CardForm key={index} card={card} index={index} onChange={handleChange} deckInput={deckInput} setDeckInput={setDeckInput}/>)}

          <Button variant="secondary" onClick={handleAddCardClick}>
            Add a Card
          </Button>

          <Button variant="primary" type="submit">
            Save Deck
          </Button>
        </Form>
        {errors}
      </Container> : <p>loading...</p> }
    </div>
  )
}

export default CreateDecks