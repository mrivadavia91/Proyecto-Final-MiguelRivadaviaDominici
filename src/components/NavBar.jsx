import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from "./CardWidget";

export const NavBar = () => {
    return <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/category/anillo">Anillo</Nav.Link>
            <Nav.Link as={NavLink} to="/category/pulsera">Pulsera</Nav.Link>
            <Nav.Link as={NavLink} to="/category/arito">Arito</Nav.Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>    
    
    
    </>
}