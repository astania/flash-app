import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeckContainer from '../public_decks_components/DeckContainer';
import Image from 'react-bootstrap/Image'

const Profile = ({ user }) => {

  return (
    <div>
      {user ? <Card className="text-center" style={{ width: '18rem' }}>
        <Card.Header>Profile</Card.Header>
        <Image src={user.profile_image} roundedCircle fluid/>
        {/* <Card.Img variant="top" src={user.profile_image}  /> */}
        <Card.Body>
          <Card.Title>Your email: {user.email}</Card.Title>
          <Card.Text>
            My Decks:
            {user.decks.length > 0 ? user.decks.map(deck => <DeckContainer key={deck.id} deck={deck} />) : <span>Go to the Create tab to make some decks!</span>}
            <Button variant="primary">Go somewhere</Button>
          </Card.Text>
        </Card.Body>
      </Card> : <p>loading...</p>}


    </div>

  )
}

export default Profile


