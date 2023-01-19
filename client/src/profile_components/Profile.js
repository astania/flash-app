import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeckContainer from '../public_decks_components/DeckContainer';

const Profile = ({ user }) => {

  return (
    <div>
      <Card className="text-center">
        <Card.Header>Profile</Card.Header>
        <Card.Img variant="top" src={user.profile_image} />
        <Card.Body>
          <Card.Title>Your email: {user.email}</Card.Title>
          <Card.Text>
            My Decks:
            {user.decks.length > 0 ? user.decks.map(deck => <DeckContainer key={deck.id} deck={deck}/> ) : <span>Go to the Create tab to make some decks!</span>}
          <Button variant="primary">Go somewhere</Button>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

  )
}

export default Profile


          