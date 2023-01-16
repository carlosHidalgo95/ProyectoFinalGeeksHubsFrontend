import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import { useUserContext } from '../../UserProvider';
import { useJwt } from "react-jwt";
import './Header.scss'

function Header() {

  const user = useUserContext();
  const token = localStorage.getItem('jwt');
  const { decodedToken, isExpired } = useJwt(token);
  let username='';
  let isAdmin=false;
  if (decodedToken) {
       username=decodedToken.username;
      if (decodedToken.role===1) {
        isAdmin=true;
      }
  }


  function logOutHandler() {
    localStorage.removeItem("jwt");
  }
  if (decodedToken&&!!isExpired) {
    //Si es admministrador
    if (isAdmin===true) {
      return (
        <Row className='headerRow'>
        <Navbar className='Navbar' expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Col/>
                <Col>
                  <Nav.Link className='words1' href="/booking">Reservar</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/orders">Historial</Nav.Link>
                </Col>
                <Nav.Link className='words1' href="/create-dish">Crear Plato</Nav.Link>
                <Nav.Link className='words1 logout' href="/" onClick={logOutHandler}>Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Row>
      );
    }else{
      //Si no es administrador
      return (
        <Row className='headerRow'>
        <Navbar className='Navbar' expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Col/>
                <Col>
                  <Nav.Link className='words1' href="/booking">Reservar</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/orders">Historial</Nav.Link>
                </Col>
                <Nav.Link className='words1 logout' href="/" onClick={logOutHandler}>Log Out</Nav.Link>

              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Row>
      );
    }
  } else {
    //Si no está loggeado
    return (
      <Row className='headerRow'>
        <Navbar className='Navbar' expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Col/>
                <Col>
                  <Nav.Link className='words1' href="/">Login</Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='words1' href="/Register">Register</Nav.Link>
                </Col>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Row>

    )
  }
}

export default Header