
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navigation = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    fetch("/logout", {
      method: "DELETE",
  }).then(onLogout()).then(navigate("/"))  
  }

  return (
    <div className="mb-3">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/subjects">Subjects</Nav.Link>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Button variant="outline-secondary" onClick={handleLogoutClick}>log out</Button>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;
