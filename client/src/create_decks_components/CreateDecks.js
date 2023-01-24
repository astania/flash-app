import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardForm from './CardForm';
import Container from 'react-bootstrap/Container';

const CreateDecks = ({ subjects }) => {

  const blankCardTemplate = {
    question: "",
    answer: ""
  }

  const blankDeckTemplate = {
    name: "",
    subject: "",
    public: "",
    cards: [blankCardTemplate]
  }

  const [deckInput, setDeckInput] = useState(blankDeckTemplate)

  console.log("deckInput", deckInput)

  const handleAddCardClick = () => {
    const updatedCards = [...deckInput.cards, blankCardTemplate]
    const updatedDeck = { ...deckInput, cards: updatedCards }
    setDeckInput(updatedDeck)
  }

  const handleChange = (e) => {
    let value = e.target.value
    let name = e.target.name

    if (e.target.type === "check"){
      value = e.target.checked
    } 
    
    console.log("checked:", e.target.checked)
    console.log("value", value)
      
    setDeckInput({...deckInput, [name]: value})
    

  }

  return (
    <div>
      <Container style={{ width: '40rem' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <h3>Deck Name</h3>
            <Form.Control type="text" placeholder="Algebra 301 Chapter 4 Quiz" name="name" onChange={handleChange} value={deckInput.name}/>
            <Form.Label>Subject:</Form.Label>
            <Form.Select aria-label="subject" name="subject" onChange={handleChange}>
              <option>Subject:</option>
              {subjects.map(subject => <option key={subject.id} value={subject.name}>{subject.name}</option>)}
            </Form.Select>

            <Form.Label>Do you want to make this deck public?</Form.Label>
            <Form.Check type="checkbox" label="Yes" name="public" onChange={handleChange} value={deckInput.public}/>
          </Form.Group>
          {deckInput.cards.map((card, index) => <CardForm key={index} card={card} index={index} onChange={handleChange} deckInput={deckInput} setDeckInput={setDeckInput}/>)}

          <Button variant="secondary" onClick={handleAddCardClick}>
            Add a Card
          </Button>

          <Button variant="primary" type="submit">
            Save Deck
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default CreateDecks