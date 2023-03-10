import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeckContainer from '../public_decks_components/DeckContainer';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser, onLogout, setCurrentDeck }) => {
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(onLogout()).then(navigate("/"))
  }


  return (
    <Container>
      <div>
        {user ? <Card className="text-center" style={{ width: '18rem' }}>
          <Card.Header>Profile</Card.Header>
          <Image src={user.profile_image} roundedCircle fluid />
          <Card.Body>
            <Card.Title as="div">Your email: {user.email}</Card.Title>
            <Card.Text as="div">
              My Decks:
              {user.decks.length > 0 ? user.decks.map(deck => <DeckContainer key={deck.id} deck={deck} setCurrentDeck={setCurrentDeck} setUser={setUser} user={user} />) : <span>Go to the Create tab to make some decks!</span>}
              <Button onClick={handleLogoutClick} variant="secondary">Log Out</Button>
            </Card.Text>
          </Card.Body>
        </Card> : <p>loading...</p>}


      </div>
    </Container>

  )
}

export default Profile


