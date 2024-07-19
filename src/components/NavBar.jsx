import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardWidget } from "./CardWidget";

export const NavBar = () => {
    return <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ushuaia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Tienda</Nav.Link>
          </Nav>
          <CardWidget />
        </Container>
      </Navbar>    
    
    
    </>
}