import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateDecks = ({subjects}) => {
  const blankFormTemplate = {
    name: "",
    subject: "",
    public: true,
    cards: []
  }
  const [formInput, setFormInput] = useState({})

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Deck Name:</Form.Label>
          <Form.Control type="text" placeholder="Algebra 301 Chapter 4 Quiz" />

          <Form.Select aria-label="subject">
            <option disabled >Subject:</option>
            {subjects.map(subject => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
          </Form.Select>

          <Form.Label>Do you want to make this deck public?</Form.Label>
          <Form.Check type="checkbox" label="Yes" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Question</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Button variant="secondary">
          Add a Card
        </Button>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default CreateDecks